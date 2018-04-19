"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const security_service_1 = require("./security/security.service");
const core_controller_1 = require("../../core/core.controller");
const securityService = new security_service_1.SecurityService();
function loginHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    securityService.login(content)
        .subscribe(result => {
        if (result) {
            security_service_1.SecurityService.setCookie(res);
            return res.status(200).send();
        }
        return res.status(403).send();
    }, err => core_controller_1.errorHandler(res, err));
}
exports.loginHandler = loginHandler;
function userNewHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    securityService.createUser(content)
        .subscribe(() => {
        return res.status(200).send();
    }, err => core_controller_1.errorHandler(res, err));
}
exports.userNewHandler = userNewHandler;
