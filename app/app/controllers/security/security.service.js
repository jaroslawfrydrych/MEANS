"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_model_1 = require("./user.model");
var bcrypt = require("bcrypt-nodejs");
require("rxjs/add/observable/of");
var fromPromise_1 = require("rxjs/observable/fromPromise");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var SecurityService = (function () {
    function SecurityService() {
    }
    SecurityService.prototype.login = function (_a) {
        var username = _a.username, password = _a.password;
        var subject = new ReplaySubject_1.ReplaySubject();
        this.getUser(username)
            .subscribe(function (user) {
            var validation = SecurityService.validPassword(password, user.password);
            subject.next(validation);
        });
        return subject;
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
