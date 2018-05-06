let PROXY_JSON = {
    target: null
};

try {
    PROXY_JSON = require('./proxy.config.json');
} catch (e) {
    console.log('To set different proxy target crate proxy.config.json, with key "target", and specified domain and port of your api.')
}

const PROXY_CONFIG = {
    '/api': {
        target: PROXY_JSON.target || 'http://localhost',
        secure: false,
        changeOrigin: true
    }
};

module.exports = PROXY_CONFIG;