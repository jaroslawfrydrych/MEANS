"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
const core_controller_1 = require("../../../core/core.controller");
const user_model_1 = require("../security/user.model");
function usersListQuery(req, res, next) {
    users_service_1.UsersService.getUsersList()
        .then((usersList) => {
        res.json(usersList);
    })
        .catch(err => core_controller_1.errorHandler(res, err));
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
function userDetailsQuery(req, res, next) {
    users_service_1.UsersService.getUserById(req.swagger.params.id.value)
        .then(user => {
        return res.status(200).json(user);
    })
        .catch(err => core_controller_1.errorHandler(res, err));
}
exports.userDetailsQuery = userDetailsQuery;
function userDetailsUpdateHandler(req, res, next) {
    users_service_1.UsersService.updateUser(req.swagger.params.id.value, req.swagger.params.content.value)
        .then(() => {
        return res.status(200).send();
    })
        .catch(err => core_controller_1.errorHandler(res, err));
}
exports.userDetailsUpdateHandler = userDetailsUpdateHandler;
