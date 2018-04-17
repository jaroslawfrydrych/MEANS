"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var security_service_1 = require("./security.service");
exports.Schema = mongoose.Schema;
var schema = new exports.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    modifiedAt: {
        type: Date,
        required: false
    }
}).pre('save', function (next) {
    this.createdAt = new Date();
    this.password = security_service_1.SecurityService.hashPassword(this.password);
    next();
});
exports.UserSchema = mongoose.model('user', schema, 'users', true);
