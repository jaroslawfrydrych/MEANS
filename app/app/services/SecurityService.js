"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityService = (function () {
    function SecurityService() {
    }
    SecurityService.prototype.login = function (username, password) {
        this.getUser(username);
    };
    SecurityService.prototype.getUser = function (username) {
    };
    return SecurityService;
}());
exports.SecurityService = SecurityService;
