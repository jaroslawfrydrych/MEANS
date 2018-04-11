const APP_CONFIG = require('../../config/config.json');

export class AppConfig {
    public static TITLE = APP_CONFIG['title'];
    public static BASE_PATH = APP_CONFIG['basePath'];
}