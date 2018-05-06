"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../security/user.model");
class UsersService {
    static getUsersList() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersList = yield user_model_1.User.getUsersList();
            return usersList.map(({ _id, username, firstname, surname }) => {
                return {
                    id: _id.toHexString(),
                    username,
                    firstname,
                    surname
                };
            });
        });
    }
}
exports.UsersService = UsersService;
