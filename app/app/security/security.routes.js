"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var routes_controler_1 = require("../../core/routes.controler");
var security_controler_1 = require("./security.controler");
var SecurityRoutes = (function (_super) {
    __extends(SecurityRoutes, _super);
    function SecurityRoutes(app, router) {
        var _this = _super.call(this, app, router) || this;
        _this.app = app;
        _this.router = router;
        _this.securityCtrl = new security_controler_1.SecurityControler();
        return _this;
    }
    SecurityRoutes.bootstrap = function (app, router) {
        return new SecurityRoutes(app, router);
    };
    SecurityRoutes.prototype.routes = function () {
        this.router.post('/login', this.securityCtrl.login.bind(this.securityCtrl.login));
    };
    return SecurityRoutes;
}(routes_controler_1.RoutesControler));
exports.SecurityRoutes = SecurityRoutes;
