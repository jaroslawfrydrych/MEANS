"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
const core_controller_1 = require("../../../core/core.controller");
const user_model_1 = require("../security/user.model");
function usersListQuery(req, res, next) {
    users_service_1.UsersService.getUsersList()
        .then((usersList) => {
        res.json(usersList);
    });
}
exports.usersListQuery = usersListQuery;
function userNewHandler(req, res, next) {
    const content = req.swagger.params['content'].value;
    user_model_1.User.createUser(content)
        .then(() => {
        return res.status(200).send();
    })
        .catch(err => core_controller_1.errorHandler(res, err));
}
exports.userNewHandler = userNewHandler;
