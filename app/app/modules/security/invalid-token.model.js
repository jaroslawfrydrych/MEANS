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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("typegoose");
const jwt_1 = require("../../../core/jwt");
let InvalidToken = class InvalidToken extends typegoose_1.Typegoose {
    static checkToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tokenModel = yield exports.InvalidTokenModel.find({
                    token
                });
                return tokenModel.length > 0;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    static addToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const invalidAccessToken = new exports.InvalidTokenModel({ token });
                return yield invalidAccessToken.save();
            }
            catch (error) {
                return new Error(error);
            }
        });
    }
};
__decorate([
    typegoose_1.prop({ required: true, unique: true }),
    __metadata("design:type", String)
], InvalidToken.prototype, "token", void 0);
__decorate([
    typegoose_1.prop({ default: Date.now, expires: 0 }),
    __metadata("design:type", Date)
], InvalidToken.prototype, "expiresAt", void 0);
InvalidToken = __decorate([
    typegoose_1.pre('save', function (next) {
        const decode = jwt_1.Jwt.decodeToken(this.token);
        this.expiresAt = new Date(decode.exp * 1000);
        next();
    })
], InvalidToken);
exports.InvalidToken = InvalidToken;
exports.InvalidTokenModel = new InvalidToken().getModelForClass(InvalidToken);
