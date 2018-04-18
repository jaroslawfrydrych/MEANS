import {prop, Typegoose, instanceMethod, InstanceType} from 'typegoose';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import * as  bcrypt from 'bcrypt-nodejs';

export class User extends Typegoose {
    @prop({required: true, unique: true})
    username?: string;

    @prop({required: true})
    password?: string;

    @prop({required: true, default: Date.now()})
    createdAt?: Date;

    @prop()
    modifiedAt?: Date;

    @instanceMethod
    createUser(this: InstanceType<User>): Observable<{}> {
        this.password = User.hashPassword(this.password);
        return fromPromise(this.save());
    }

    public static findByUsername(username: string): Observable<User> {
        return fromPromise(UserModel.findOne({
            username
        }))
    }

    public static hashPassword(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }

    public static validPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}

export const UserModel = new User().getModelForClass(User);

/*
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
}).pre('save', function (next) {
    this.createdAt = new Date();
    this.password = SecurityService.hashPassword(this.password);
    next();
});

export const UserSchema = mongoose.model<User>('user', schema, 'users', true);*/
