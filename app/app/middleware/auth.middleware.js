"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../modules/security/user.model");
exports.default = (req, res, next) => {
    user_model_1.UserModel.findById(req.auth.id)
        .then(user => {
        console.log('user', user);
        next();
    });
};
