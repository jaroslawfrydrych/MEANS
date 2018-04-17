"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecurityService_1 = require("../services/SecurityService");
var securityService = new SecurityService_1.SecurityService();
function loginHandler(req, res, next) {
    var content = req.swagger.params['content'].value;
    securityService.login(content)
        .subscribe(function () {
        res.json(content);
    });
}
exports.loginHandler = loginHandler;
