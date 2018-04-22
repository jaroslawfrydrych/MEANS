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
const user_model_1 = require("./user.model");
const jwt_1 = require("../../../core/jwt");
const invalid_token_model_1 = require("./invalid-token.model");
const fromPromise_1 = require("rxjs/observable/fromPromise");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
const refresh_token_model_1 = require("./refresh-token.model");
class SecurityService {
    static setAccessTokenCookie(res, id) {
        return jwt_1.Jwt.setAccessTokenCookie(res, id);
    }
    static setRefreshTokenCookie(res, id) {
        return fromPromise_1.fromPromise(jwt_1.Jwt.setRefreshTokenCookie(res, id));
    }
    static clearTokenCookies(res) {
        jwt_1.Jwt.clearTokenCookies(res);
    }
    static logout(res, { access, refresh }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield invalid_token_model_1.InvalidToken.addToken(access);
            if (refresh) {
                yield refresh_token_model_1.RefreshToken.removeToken(refresh);
            }
            SecurityService.clearTokenCookies(res);
            return {};
        });
    }
    static validateUser({ username, password }) {
        return user_model_1.User.findByUsername(username)
            .map(user => {
            if (user && user_model_1.User.validPassword(password, user.password)) {
                return user['_id'];
            }
            return null;
        });
    }
    constructor() {
    }
}
exports.SecurityService = SecurityService;
