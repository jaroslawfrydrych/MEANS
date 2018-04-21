import * as express from 'express';
import * as expressJwt from 'express-jwt';
import * as jwt from 'jsonwebtoken';
import {AppConfig} from './app.config';
import {isNullOrUndefined} from 'util';
import authMiddleware from './../app/middleware/auth.middleware';

enum tokenType {
    bearer = 'BEARER',
    refresh = 'REFRESH'
}

export class Jwt {
    private static getAccessToken(req) {
        if (!isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }

        return null;
    }

    private static getRefreshToken(req) {
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

    public static generateRefreshToken(data: any, exp?: number): string {
        if (exp) {
            data.exp = Math.floor(new Date(Date.now() + exp).getTime() / 1000);
        }
        return jwt.sign(data, AppConfig.REFRESH_TOKEN_SECRET);
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

    public static setRefreshTokenCookie(res, id: string): string {
        const exp: number = AppConfig.REFRESH_TOKEN_LIFETIME_DAYS * 1000 * 3600 * 24;
        const token = Jwt.generateRefreshToken({id}, exp);
        this.setCookie(res, tokenType.refresh, token, exp);
        return token;
    }

    public static clearTokenCookies(res) {
        res.clearCookie(tokenType.bearer);
        res.clearCookie(tokenType.refresh);
    }

    private static handleTokenAndRefresh(req, res, next, unprotected) {
        if (unprotected.indexOf(req.url) !== -1) {
            return next();
        }

        const token = Jwt.getAccessToken(req);

        jwt.verify(token, AppConfig.ACCESS_TOKEN_SECRET, (err => {
            if (!err) {
                return next();
            }

            this.handleRefreshToken(res, req, next);
        }));
    }

    private static handleRefreshToken(res, req, next) {
        // TODO check db, blacklist tokens, etc

        const refreshToken = Jwt.getRefreshToken(req);

        jwt.verify(refreshToken, AppConfig.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return Jwt.authError(res);
            }

            req.cookies.BEARER = this.setAccessTokenCookie(res, decoded.id);
            req.cookies.REFRESH = this.setRefreshTokenCookie(res, decoded.id);

            next();
        });
    }

    private static authError(res) {
        res.status(401).send('Brak autoryzacji');
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
        this.app.use((req, res, next) => Jwt.handleTokenAndRefresh(req, res, next, unprotected),
            expressJwt({
                secret: AppConfig.ACCESS_TOKEN_SECRET,
                requestProperty: 'auth',
                getToken: (req) => Jwt.getAccessToken(req)
            }).unless({path: unprotected}),
            (req, res, next) => authMiddleware(req, res, next, unprotected));

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
