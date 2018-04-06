"use strict";
var APP_CONFIG = require("../../config/config.json");
var Route;
(function (Route) {
    var Index = (function () {
        function Index() {
        }
        Index.prototype.index = function (req, res, next) {
            res.render('index', {
                title: APP_CONFIG.title ? APP_CONFIG.title : ''
            });
        };
        return Index;
    }());
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
