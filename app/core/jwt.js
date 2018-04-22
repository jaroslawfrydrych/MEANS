"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const app_config_1 = require("./app.config");
const util_1 = require("util");
const auth_middleware_1 = require("./../app/middleware/auth.middleware");
const refresh_token_model_1 = require("../app/modules/security/refresh-token.model");
const invalid_token_model_1 = require("../app/modules/security/invalid-token.model");
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
        return __awaiter(this, void 0, void 0, function* () {
            if (exp) {
                data.exp = Math.floor(new Date(Date.now() + exp).getTime() / 1000);
            }
            const token = jwt.sign(data, app_config_1.AppConfig.REFRESH_TOKEN_SECRET);
            const tokenModel = new refresh_token_model_1.RefreshTokenModel({
                token
            });
            try {
                yield tokenModel.save();
            }
            catch (error) {
                throw new Error(error);
            }
            return token;
        });
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
        this.setCookie(res, tokenType.bearer, token, exp);
        return token;
    }
    static setRefreshTokenCookie(res, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exp = app_config_1.AppConfig.REFRESH_TOKEN_LIFETIME_HOURS * 1000 * 3600;
            const token = yield Jwt.generateRefreshToken({ id }, exp);
            this.setCookie(res, tokenType.refresh, token, exp);
            return token;
        });
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
        invalid_token_model_1.InvalidToken.checkToken(token)
            .then(checkToken => {
            if (checkToken) {
                return Jwt.authError(res);
            }
            Jwt.verifyToken(token, app_config_1.AppConfig.ACCESS_TOKEN_SECRET)
                .then(() => {
                return next();
            })
                .catch(() => {
                this.handleRefreshToken(res, req)
                    .then(() => {
                    next();
                }, () => Jwt.authError(res));
            });
        })
            .catch(() => Jwt.authError(res));
    }
    static handleRefreshToken(res, req) {
        return __awaiter(this, void 0, void 0, function* () {
            const refreshToken = Jwt.getRefreshToken(req);
            const decoded = yield this.verifyToken(refreshToken, app_config_1.AppConfig.REFRESH_TOKEN_SECRET);
            const checkRefresh = yield refresh_token_model_1.RefreshToken.checkToken(refreshToken);
            if (checkRefresh) {
                req.cookies.BEARER = this.setAccessTokenCookie(res, decoded.id);
                const generatedToken = yield this.setRefreshTokenCookie(res, decoded.id);
                yield refresh_token_model_1.RefreshToken.removeToken(refreshToken);
                return req.cookies.REFRESH = generatedToken;
            }
        });
    }
    static decodeToken(token) {
        return jwt.decode(token);
    }
    static verifyToken(token, secret) {
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
