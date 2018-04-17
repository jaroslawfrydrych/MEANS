import * as mongoose from 'mongoose';
import {SecurityService} from './security.service';

export const Schema = mongoose.Schema;

export interface User extends mongoose.Document {
    username: string;
    password: string;
}

const schema = new Schema({
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
}).pre('save', function(next) {
    this.createdAt = new Date();
    this.password = SecurityService.hashPassword(this.password);
    next();
});

export const UserSchema = mongoose.model<User>('user', schema, 'users', true);