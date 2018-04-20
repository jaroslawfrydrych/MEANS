"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asdHandler(req, res, next) {
    res.send(req.auth);
}
exports.asdHandler = asdHandler;
