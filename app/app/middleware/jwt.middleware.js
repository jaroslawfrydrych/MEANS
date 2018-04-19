"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = require("../../core/app.config");
exports.default = (req, res, next, swaggerDoc) => {
    const pathsWithNoFirewall = swaggerPathsWithNoFirewall(swaggerDoc);
    if (pathsWithNoFirewall.indexOf(req.url) !== -1) {
        return next();
    }
    console.log(req.cookies, req.signedCookies);
    if (req && req.cookies) {
        console.log(req.cookies['BEARER']);
    }
    next();
};
function swaggerPathsWithNoFirewall(swaggerDoc) {
    const basePath = swaggerDoc.basePath;
    const paths = [];
    for (const pat in swaggerDoc.paths) {
        const pathParams = swaggerDoc.paths[pat];
        if (pathParams[app_config_1.AppConfig.NO_FIREWALL_PATH_PARAMETER_NAME]) {
            paths.push(basePath + pat);
        }
    }
    return paths;
}
exports.swaggerPathsWithNoFirewall = swaggerPathsWithNoFirewall;
