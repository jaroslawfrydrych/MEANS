const CONFIG = require('./config/config.json');

let PROXY_JSON = {
    target: null
};

try {
    PROXY_JSON = require('./proxy.config.json');
} catch (e) {
    console.log('To set different proxy target crate proxy.config.json, with key "target", and specified domain and port of your api.')
}

const target = PROXY_JSON.target || 'http://localhost:' + CONFIG.port;

const PROXY_CONFIG = {
    '/api': {
        target,
        secure: false,
        changeOrigin: true
    }
};

console.log('Proxy is pointing at ' + target);

module.exports = PROXY_CONFIG;