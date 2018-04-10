"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppControler = (function () {
    function AppControler() {
    }
    AppControler.prototype.index = function (req, res, next) {
        res.json({
            value: req.params.value
        });
    };
    return AppControler;
}());
exports.AppControler = AppControler;
