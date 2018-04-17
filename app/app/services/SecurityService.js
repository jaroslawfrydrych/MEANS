"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var SecurityService = (function () {
    function SecurityService() {
    }
    SecurityService.prototype.login = function (_a) {
        var username = _a.username, password = _a.password;
        this.getUser(username);
        return Observable_1.Observable.of(true);
    };
    SecurityService.prototype.getUser = function (username) {
    };
    return SecurityService;
}());
exports.SecurityService = SecurityService;
