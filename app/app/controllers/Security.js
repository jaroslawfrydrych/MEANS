"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var security_service_1 = require("./security/security.service");
var securityService = new security_service_1.SecurityService();
function loginHandler(req, res, next) {
    var content = req.swagger.params['content'].value;
    securityService.login(content)
        .subscribe(function (result) {
        if (result) {
            return res.status(200).send();
        }
        return res.status(403).send();
    }, function (err) {
        console.error(err);
    });
}
exports.loginHandler = loginHandler;
