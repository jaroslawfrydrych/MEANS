"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APP_CONFIG = require('../../config/config.json');
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.TITLE = APP_CONFIG['title'];
    AppConfig.BASE_PATH = APP_CONFIG['basePath'];
    return AppConfig;
}());
exports.AppConfig = AppConfig;
