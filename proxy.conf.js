const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');
const CONFIG = require('./config/config.json');

const swaggerSpec = fs.readFileSync(path.join(__dirname, './swagger/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(swaggerSpec);

let PROXY_JSON = {
    target: null
};

try {
    PROXY_JSON = require('./proxy.config.json');
} catch (e) {
    console.log('To set different proxy target crate proxy.config.json, with key "target", and specified domain and port of your api.')
}

const target = PROXY_JSON.target || 'http://localhost:' + CONFIG.port;

const PROXY_CONFIG = {};

PROXY_CONFIG[swaggerDoc.basePath] = {
    target,
        secure: false,
        changeOrigin: true
};

console.log(PROXY_CONFIG);

console.log('Proxy is pointing at ' + target);

module.exports = PROXY_CONFIG;