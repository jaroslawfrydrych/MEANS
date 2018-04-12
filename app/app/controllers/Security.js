"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loginHandler(req, res, next) {
    var content = req.swagger.params['content'].value;
    res.json(content);
}
exports.loginHandler = loginHandler;
