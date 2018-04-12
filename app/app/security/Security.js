'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function asdHandler(req, res, next) {
    res.send('aaa1');
}
exports.asdHandler = asdHandler;
function loginHandler(req, res, next) {
    var content = req.swagger.params['content'].value;
    res.json(content);
}
exports.loginHandler = loginHandler;
