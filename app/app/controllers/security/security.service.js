"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./user.model");
var fromPromise_1 = require("rxjs/observable/fromPromise");
var bcrypt = require("bcrypt-nodejs");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
var SecurityService = (function () {
    function SecurityService() {
    }
    SecurityService.prototype.login = function (_a) {
        var username = _a.username, password = _a.password;
        return this.getUser(username)
            .map(function (user) {
            if (user) {
                return SecurityService.validPassword(password, user.password);
            }
            else {
                return false;
            }
        });
    };
    SecurityService.prototype.getUser = function (username) {
        return fromPromise_1.fromPromise(user_model_1.UserSchema.findOne({
            username: username
        }));
    };
    SecurityService.hashPassword = function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    SecurityService.validPassword = function (password, hash) {
        return bcrypt.compareSync(password, hash);
    };
    return SecurityService;
}());
exports.SecurityService = SecurityService;
