"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("./users.service");
function usersListQuery(req, res, next) {
    users_service_1.UsersService.getUsersList()
        .then((usersList) => {
        res.json(usersList);
    });
}
exports.usersListQuery = usersListQuery;
