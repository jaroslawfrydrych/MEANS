"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const fromPromise_1 = require("rxjs/observable/fromPromise");
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
    createUser(content) {
        const user = new user_model_1.UserModel(content);
        return fromPromise_1.fromPromise(user.save());
    }
    getCurrentUser(userId) {
        return user_model_1.User.findById(userId)
            .map(user => {
            return { username: user.username };
        });
    }
}
exports.SecurityService = SecurityService;
