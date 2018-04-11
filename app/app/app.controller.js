"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppController = (function () {
    function AppController() {
    }
    AppController.prototype.index = function (req, res, next) {
        res.json({
            value: req.params.value
        });
    };
    return AppController;
}());
exports.AppController = AppController;
