"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const security_service_1 = require("./security.service");
const core_controller_1 = require("../../../core/core.controller");
const securityService = new security_service_1.SecurityService();
function loginHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    securityService.validateUser(content)
        .subscribe(userId => {
        if (userId) {
            security_service_1.SecurityService.setAccessTokenCookie(res, userId);
            security_service_1.SecurityService.setRefreshTokenCookie(res, userId);
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
function currentUserQuery(req, res, next) {
    const { username } = req.user;
    return res.json({
        username
    });
}
exports.currentUserQuery = currentUserQuery;
