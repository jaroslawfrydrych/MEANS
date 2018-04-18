"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
class SecurityService {
    constructor() {
    }
    login({ username, password }) {
        return user_model_1.User.findByUsername(username)
            .map(user => {
            if (user) {
                return user_model_1.User.validPassword(password, user.password);
            }
            else {
                return false;
            }
        });
    }
    createUser(content) {
        const user = new user_model_1.UserModel(content);
        return user.createUser();
    }
    setCookie(res) {
        res.cookie('BEARER', 'token', { expires: new Date(Date.now() + 900000), httpOnly: true, secure: true });
    }
}
exports.SecurityService = SecurityService;
