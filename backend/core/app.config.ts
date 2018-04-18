const APP_CONFIG = require('../../config/config.json');

interface MongoConfig {
    host?: string,
    port?: number;
    database?: string,
    username?: string,
    password?: string
}

export class AppConfig {
    public static ENV = APP_CONFIG['env'] || 'development';
    public static PORT = APP_CONFIG['port'] || 8080;
    public static TITLE = APP_CONFIG['title'] || '';
    public static BASE_PATH = APP_CONFIG['basePath'] || '';
    public static SWAGGER_CONTROLLERS = APP_CONFIG['swaggerControllers'] || '';
    public static MONGO: MongoConfig = APP_CONFIG['mongo'] || null;
    public static SECRET: string = APP_CONFIG['secret'] || '';
}