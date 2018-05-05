import * as express from 'express';
import * as expressJwt from 'express-jwt';
import * as jwt from 'jsonwebtoken';
import {AppConfig} from './app.config';
import {isNullOrUndefined} from 'util';
import authMiddleware from './../app/middleware/auth.middleware';
import {RefreshToken, RefreshTokenModel} from '../app/modules/security/refresh-token.model';
import {InvalidToken} from '../app/modules/security/invalid-token.model';

enum tokenType {
    bearer = 'BEARER',
    refresh = 'REFRESH'
}

export class Jwt {
    private static getAccessToken(req): string | null {
        if (!isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }

        return null;
    }

    private static getRefreshToken(req): string | null {
        if (!isNullOrUndefined(req.cookies.REFRESH)) {
            return req.cookies.REFRESH;
        }

        return null;
    }

    public static generateAccessToken(data: any, exp?: number): string {
        if (exp) {
            data.exp = Math.floor(new Date(Date.now() + exp).getTime() / 1000);
        }
        return jwt.sign(data, AppConfig.ACCESS_TOKEN_SECRET);
    }

    public static async generateRefreshToken(data: any, exp?: number): Promise<string> {
        if (exp) {
            data.exp = Math.floor(new Date(Date.now() + exp).getTime() / 1000);
        }

        const token: string = jwt.sign(data, AppConfig.REFRESH_TOKEN_SECRET);
        const tokenModel = new RefreshTokenModel({
            token
        });

        try {
            await tokenModel.save();
        } catch (error) {
            throw new Error(error);
        }

        return token;
    }

    public static setCookie(res, type: string, token: string, exp: number): void {
        res.cookie(
            type,
            token,
            {
                expires: new Date(Date.now() + exp),
                httpOnly: true,
                secure: false
            });
    }

    public static setAccessTokenCookie(res, id: string): string {
        const exp: number = AppConfig.ACCESS_TOKEN_LIFETIME_MINUTES * 1000 * 60;
        const token = Jwt.generateAccessToken({id}, exp);
        this.setCookie(res, tokenType.bearer, token, exp);
        return token;
    }

    public static async setRefreshTokenCookie(res, id: string): Promise<string> {
        const exp: number = AppConfig.REFRESH_TOKEN_LIFETIME_HOURS * 1000 * 3600;
        const token = await Jwt.generateRefreshToken({id}, exp);
        this.setCookie(res, tokenType.refresh, token, exp);
        return token;
    }

    public static clearTokenCookies(res): void {
        res.clearCookie(tokenType.bearer);
        res.clearCookie(tokenType.refresh);
    }

    private static handleTokenAndRefresh(req, res, next, unprotected) {
        if (unprotected.indexOf(req.url) !== -1) {
            return next();
        }

        const token = Jwt.getAccessToken(req);

        InvalidToken.checkToken(token)
            .then(checkToken => {
                if (checkToken) {
                    return Jwt.authError(res);
                }

                Jwt.verifyToken(token, AppConfig.ACCESS_TOKEN_SECRET)
                    .then(() => {
                        return next();
                    })
                    .catch(() => {
                        this.handleRefreshToken(res, req)
                            .then(() => {
                                    next();
                                },
                                () => Jwt.authError(res));
                    });
            })
            .catch(() => Jwt.authError(res));
    }

    private static async handleRefreshToken(res, req) {
        const refreshToken = Jwt.getRefreshToken(req);
        const decoded: any = await this.verifyToken(refreshToken, AppConfig.REFRESH_TOKEN_SECRET);
        const checkRefresh: boolean = await RefreshToken.checkToken(refreshToken);

        if (checkRefresh) {
            req.cookies.BEARER = this.setAccessTokenCookie(res, decoded.id);
            const generatedToken = await this.setRefreshTokenCookie(res, decoded.id);
            await RefreshToken.removeToken(refreshToken);
            return req.cookies.REFRESH = generatedToken;
        }
    }

    public static decodeToken(token): any {
        return jwt.decode(token);
    }

    public static verifyToken(token, secret): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!token) {
                return reject();
            }

            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    return reject(err);
                }

                return resolve(decoded);
            });
        });
    }

    private static authError(res): void {
        res.status(401).send();
    }

    constructor(private app: express.Application,
                private router: express.Router,
                private swaggerDoc) {
        this.jwtGuard();
    }

    public static jwtConfig(app, router, swaggerDoc): Jwt {
        return new Jwt(app, router, swaggerDoc);
    }

    public jwtGuard(): void {
        const unprotected = ['/', ...this.getUnprotectedRoutes()];
        this.app.use((req, res, next) =>
                Jwt.handleTokenAndRefresh(req, res, next, unprotected),
            expressJwt({
                secret: AppConfig.ACCESS_TOKEN_SECRET,
                requestProperty: 'auth',
                getToken: (req) => Jwt.getAccessToken(req)
            }).unless({path: unprotected}),
            (req, res, next) =>
                authMiddleware(req, res, next, unprotected));

        this.app.use((err, req, res, next) => {
            if (err.name === 'UnauthorizedError') {
                Jwt.authError(res);
            }
        });
    }

    public getUnprotectedRoutes(): Array<string | null> {
        const basePath = this.swaggerDoc.basePath;

        return Object.keys(this.swaggerDoc.paths)
            .filter(pat => {
                const pathParams = this.swaggerDoc.paths[pat];
                if (pathParams[AppConfig.NO_FIREWALL_PATH_PARAMETER_NAME]) {
                    return pat;
                }
            }).map(pat => {
                return basePath + pat;
            });
    }
}
