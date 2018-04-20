"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APP_CONFIG = require('../../config/config.json');
class AppConfig {
}
AppConfig.ENV = APP_CONFIG['env'] || 'development';
AppConfig.PORT = APP_CONFIG['port'] || 8080;
AppConfig.TITLE = APP_CONFIG['title'] || '';
AppConfig.BASE_PATH = APP_CONFIG['basePath'] || '';
AppConfig.SWAGGER_CONTROLLERS = APP_CONFIG['swaggerControllers'] || '';
AppConfig.MONGO = APP_CONFIG['mongo'] || null;
AppConfig.ACCESS_TOKEN_SECRET = APP_CONFIG['accessTokenSecret'] || '';
AppConfig.REFRESH_TOKEN_SECRET = APP_CONFIG['refreshTokenSecret'] || '';
AppConfig.NO_FIREWALL_PATH_PARAMETER_NAME = APP_CONFIG['noFirewallPathParameterName'] || 'x-swagger-router-no-firewall';
AppConfig.ACCESS_TOKEN_LIFETIME_MINUTES = APP_CONFIG['accessTokenLifetimeMinutes'] || 15;
AppConfig.REFRESH_TOKEN_LIFETIME_DAYS = APP_CONFIG['refreshTokenLifetimeDays'] || 5;
exports.AppConfig = AppConfig;
