const APP_CONFIG = require('../../config/config.json');

export class AppConfig {
    public static ENV = APP_CONFIG['env'] ? APP_CONFIG['env'] : 'development';
    public static TITLE = APP_CONFIG['title'] ? APP_CONFIG['title'] : '';
    public static BASE_PATH = APP_CONFIG['basePath'] ? APP_CONFIG['basePath'] : '';
    public static SWAGGER_CONTROLLERS = APP_CONFIG['swaggerControllers'] ? APP_CONFIG['swaggerControllers'] : '';
}