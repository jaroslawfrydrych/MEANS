"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const app_config_1 = require("./app.config");
const util_1 = require("util");
class Jwt {
    constructor(app, swaggerDoc) {
        this.app = app;
        this.swaggerDoc = swaggerDoc;
        this.jwtGuard();
    }
    static getToken(req) {
        if (!util_1.isNullOrUndefined(req.cookies.BEARER)) {
            return req.cookies.BEARER;
        }
        return null;
    }
    static generateToken(data) {
        return jwt.sign(data, app_config_1.AppConfig.SECRET);
    }
    static jwtConfig(app, swaggerDoc) {
        return new Jwt(app, swaggerDoc);
    }
    jwtGuard() {
        const unprotected = this.getUnprotectedRoutes();
        this.app.use(expressJwt({
            secret: app_config_1.AppConfig.SECRET,
            getToken: (req) => Jwt.getToken(req)
        }).unless({ path: ['/', ...unprotected] }));
        this.app.use((err, req, res, next) => {
            if (err.name === 'UnauthorizedError') {
                res.status(401).send('Brak autoryzacji');
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
