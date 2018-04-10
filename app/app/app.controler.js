"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
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
    App.AppControler = AppControler;
})(App = exports.App || (exports.App = {}));
