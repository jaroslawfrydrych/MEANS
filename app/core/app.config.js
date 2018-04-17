"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APP_CONFIG = require('../../config/config.json');
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.ENV = APP_CONFIG['env'] || 'development';
    AppConfig.PORT = APP_CONFIG['port'] || 8080;
    AppConfig.TITLE = APP_CONFIG['title'] || '';
    AppConfig.BASE_PATH = APP_CONFIG['basePath'] || '';
    AppConfig.SWAGGER_CONTROLLERS = APP_CONFIG['swaggerControllers'] || '';
    AppConfig.MONGO = APP_CONFIG['mongo'] || null;
    return AppConfig;
}());
exports.AppConfig = AppConfig;
