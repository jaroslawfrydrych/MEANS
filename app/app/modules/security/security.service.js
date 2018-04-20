"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
const fromPromise_1 = require("rxjs/observable/fromPromise");
const jwt_1 = require("../../../core/jwt");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
class SecurityService {
    static setCookie(res, id) {
        res.cookie('BEARER', jwt_1.Jwt.generateToken({ id }), {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
            secure: false
        });
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
}
exports.SecurityService = SecurityService;
