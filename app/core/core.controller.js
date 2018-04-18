"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(res, err) {
    res.status(500).send(err);
}
exports.errorHandler = errorHandler;
