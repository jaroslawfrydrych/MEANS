"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const fromPromise_1 = require("rxjs/observable/fromPromise");
const bcrypt = require("bcrypt-nodejs");
let User = User_1 = class User extends typegoose_1.Typegoose {
    static findByUsername(username) {
        return fromPromise_1.fromPromise(exports.UserModel.findOne({
            username
        }));
    }
    static findById(id) {
        return fromPromise_1.fromPromise(exports.UserModel.findById(id));
    }
    static hashPassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }
    static validPassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
};
__decorate([
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typegoose_1.prop({ required: true, default: Date.now() }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Date)
], User.prototype, "modifiedAt", void 0);
User = User_1 = __decorate([
    typegoose_1.pre('save', function (next) {
        this.password = User_1.hashPassword(this.password);
        next();
    })
], User);
exports.User = User;
exports.UserModel = new User().getModelForClass(User);
var User_1;
