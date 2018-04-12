"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APP_CONFIG = require('../../config/config.json');
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.ENV = APP_CONFIG['env'] ? APP_CONFIG['env'] : 'development';
    AppConfig.TITLE = APP_CONFIG['title'] ? APP_CONFIG['title'] : '';
    AppConfig.BASE_PATH = APP_CONFIG['basePath'] ? APP_CONFIG['basePath'] : '';
    AppConfig.SWAGGER_CONTROLLERS = APP_CONFIG['swaggerControllers'] ? APP_CONFIG['swaggerControllers'] : '';
    return AppConfig;
}());
exports.AppConfig = AppConfig;
