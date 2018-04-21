"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const user_model_1 = require("./user.model");
const jwt_1 = require("../../../core/jwt");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
class SecurityService {
    static setAccessTokenCookie(res, id) {
        return jwt_1.Jwt.setAccessTokenCookie(res, id);
    }
    static setRefreshTokenCookie(res, id) {
        return jwt_1.Jwt.setRefreshTokenCookie(res, id);
    }
    static clearTokenCookies(res) {
        jwt_1.Jwt.clearTokenCookies(res);
    }
    constructor() {
    }
    validateUser({ username, password }) {
        return user_model_1.User.findByUsername(username)
            .map(user => {
            if (user && user_model_1.User.validPassword(password, user.password)) {
                return user['_id'];
            }
            return null;
        });
    }
    logout(res, tokens) {
        SecurityService.clearTokenCookies(res);
        return Observable_1.Observable.of({});
    }
}
exports.SecurityService = SecurityService;
