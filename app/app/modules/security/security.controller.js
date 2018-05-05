"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const security_service_1 = require("./security.service");
const core_controller_1 = require("../../../core/core.controller");
const user_model_1 = require("./user.model");
function loginHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    security_service_1.SecurityService.validateUser(content)
        .then(userId => {
        if (userId) {
            security_service_1.SecurityService.setAccessTokenCookie(res, userId);
            return security_service_1.SecurityService.setRefreshTokenCookie(res, userId)
                .subscribe(() => {
                return res.status(200).send();
            }, err => core_controller_1.errorHandler(res, err));
        }
        return res.status(403).send('Invalid credentials');
    }).catch(err => core_controller_1.errorHandler(res, err));
}
exports.loginHandler = loginHandler;
function logoutHandler(req, res, next) {
    const tokens = {
        refresh: req.cookies.REFRESH || null,
        access: req.cookies.BEARER || null
    };
    security_service_1.SecurityService.logout(res, tokens)
        .then(() => {
        res.send();
    }, err => core_controller_1.errorHandler(res, err));
}
exports.logoutHandler = logoutHandler;
function userNewHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    user_model_1.User.createUser(content)
        .then(() => {
        return res.status(200).send();
    })
        .catch(err => core_controller_1.errorHandler(res, err));
}
exports.userNewHandler = userNewHandler;
function currentUserQuery(req, res, next) {
    const { username, firstname, surname } = req.user;
    return res.json({
        username,
        firstname,
        surname
    });
}
exports.currentUserQuery = currentUserQuery;
