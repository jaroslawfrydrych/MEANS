"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_controler_1 = require("./app.controler");
var AppRoutes = (function () {
    function AppRoutes(app, router) {
        this.app = app;
        this.router = router;
    }
    AppRoutes.prototype.routes = function () {
        var appCtrl = new app_controler_1.App.AppControler();
        this.router.get('/asd/:value', appCtrl.index.bind(appCtrl.index));
    };
    return AppRoutes;
}());
exports.AppRoutes = AppRoutes;
