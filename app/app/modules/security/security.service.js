"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
class SecurityService {
    static setCookie(res) {
        res.cookie('BEARER', this.generateToken(), { expires: new Date(Date.now() + 900000), httpOnly: true, secure: false });
    }
    static generateToken() {
        return 'eyJhbGciOiJIUzI1NiJ9.e30.LGeuoyBj5ZeiZC0dYrYCHJs1-4WHGiFeyqXN3hBTRPI';
    }
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
}
exports.SecurityService = SecurityService;
