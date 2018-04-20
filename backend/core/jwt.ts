import * as express from 'express';
import * as expressJwt from 'express-jwt';
import * as jwt from 'jsonwebtoken';
import {AppConfig} from './app.config';
import {isNullOrUndefined} from 'util';

export class Jwt {
    private static getToken(req) {
        if (!isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }

        return null;
    }

    public static generateToken(data: {}): string {
        return jwt.sign(data, AppConfig.SECRET);
    }

    constructor(private app: express.Application, private swaggerDoc) {
        this.jwtGuard();
    }

    public static jwtConfig(app, swaggerDoc): Jwt {
        return new Jwt(app, swaggerDoc);
    }

    public jwtGuard(): void {
        const unprotected = this.getUnprotectedRoutes();
        this.app.use(expressJwt({
            secret: AppConfig.SECRET,
            getToken: (req) => Jwt.getToken(req)
        }).unless({path: ['/', ...unprotected]}));

        this.app.use((err, req, res, next) => {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send('Brak autoryzacji');
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
