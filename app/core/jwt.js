"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const app_config_1 = require("./app.config");
const util_1 = require("util");
const auth_middleware_1 = require("./../app/middleware/auth.middleware");
var tokenType;
(function (tokenType) {
    tokenType["bearer"] = "BEARER";
    tokenType["refresh"] = "REFRESH";
})(tokenType || (tokenType = {}));
class Jwt {
    constructor(app, router, swaggerDoc) {
        this.app = app;
        this.router = router;
        this.swaggerDoc = swaggerDoc;
        this.jwtGuard();
    }
    static getAccessToken(req) {
        if (!util_1.isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }
        return null;
    }
    static getRefreshToken(req) {
        if (!util_1.isNullOrUndefined(req.cookies.REFRESH)) {
            return req.cookies.REFRESH;
        }
        return null;
    }
    static generateAccessToken(data, exp) {
        if (exp) {
            data.exp = Math.floor(new Date(Date.now() + exp).getTime() / 1000);
        }
        return jwt.sign(data, app_config_1.AppConfig.ACCESS_TOKEN_SECRET);
    }
    static generateRefreshToken(data, exp) {
        if (exp) {
            data.exp = Math.floor(new Date(Date.now() + exp).getTime() / 1000);
        }
        return jwt.sign(data, app_config_1.AppConfig.REFRESH_TOKEN_SECRET);
    }
    static setCookie(res, type, token, exp) {
        res.cookie(type, token, {
            expires: new Date(Date.now() + exp),
            httpOnly: true,
            secure: false
        });
    }
    static setAccessTokenCookie(res, id) {
        const exp = app_config_1.AppConfig.ACCESS_TOKEN_LIFETIME_MINUTES * 1000 * 60;
        const token = Jwt.generateAccessToken({ id }, exp);
        Jwt.setCookie(res, tokenType.bearer, token, exp);
        return token;
    }
    static setRefreshTokenCookie(res, id) {
        const exp = app_config_1.AppConfig.REFRESH_TOKEN_LIFETIME_DAYS * 1000 * 3600 * 24;
        const token = Jwt.generateRefreshToken({ id }, exp);
        Jwt.setCookie(res, tokenType.refresh, token, exp);
        return token;
    }
    static clearTokenCookies(res) {
        res.clearCookie(tokenType.bearer);
        res.clearCookie(tokenType.refresh);
    }
    static handleTokenAndRefresh(req, res, next, unprotected) {
        if (unprotected.indexOf(req.url) !== -1) {
            return next();
        }
        const token = Jwt.getAccessToken(req);
        jwt.verify(token, app_config_1.AppConfig.ACCESS_TOKEN_SECRET, (err => {
            if (!err) {
                return next();
            }
            this.handleRefreshToken(res, req, next);
        }));
    }
    static handleRefreshToken(res, req, next) {
        const refreshToken = Jwt.getRefreshToken(req);
        jwt.verify(refreshToken, app_config_1.AppConfig.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return Jwt.authError(res);
            }
            req.cookies.BEARER = this.setAccessTokenCookie(res, decoded.id);
            req.cookies.REFRESH = this.setRefreshTokenCookie(res, decoded.id);
            next();
        });
    }
    static authError(res) {
        res.status(401).send('Brak autoryzacji');
    }
    static jwtConfig(app, router, swaggerDoc) {
        return new Jwt(app, router, swaggerDoc);
    }
    jwtGuard() {
        const unprotected = ['/', ...this.getUnprotectedRoutes()];
        this.app.use((req, res, next) => Jwt.handleTokenAndRefresh(req, res, next, unprotected), expressJwt({
            secret: app_config_1.AppConfig.ACCESS_TOKEN_SECRET,
            requestProperty: 'auth',
            getToken: (req) => Jwt.getAccessToken(req)
        }).unless({ path: unprotected }), (req, res, next) => auth_middleware_1.default(req, res, next, unprotected));
        this.app.use((err, req, res, next) => {
            if (err.name === 'UnauthorizedError') {
                Jwt.authError(res);
            }
        });
    }
    getUnprotectedRoutes() {
        const basePath = this.swaggerDoc.basePath;
        return Object.keys(this.swaggerDoc.paths)
            .filter(pat => {
            const pathParams = this.swaggerDoc.paths[pat];
            if (pathParams[app_config_1.AppConfig.NO_FIREWALL_PATH_PARAMETER_NAME]) {
                return pat;
            }
        }).map(pat => {
            return basePath + pat;
        });
    }
}
exports.Jwt = Jwt;
