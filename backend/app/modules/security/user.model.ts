import {prop, Typegoose, pre} from 'typegoose';
import {UserNew} from '../../models/models';
import {DocumentQuery, Schema, Types} from 'mongoose';

const bcrypt = require('bcryptjs');

@pre<User>('save', function (next) {
    this.password = User.hashPassword(this.password);
    next();
})

export class User extends Typegoose {
    public _id: any;

    public static getUsersList(): DocumentQuery<Array<User>, any> {
        return UserModel.find().select('username firstname surname');
    }

    public static findByUsername(username: string): DocumentQuery<User, any> {
        return UserModel.findOne({
            username
        });
    }

    public static findById(id: string): DocumentQuery<User, any> {
        return UserModel.findById(id);
    }

    public static hashPassword(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }

    public static validPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }

    public static createUser(content: UserNew): Promise<{}> {
        const user = new UserModel(content);
        return user.save();
    }

    @prop(<any>{required: true, unique: true})
    public username?: string;

    @prop(<any>{required: true})
    public password?: string;

    @prop(<any>{required: false})
    public firstname?: string;

    @prop(<any>{required: false})
    public surname?: string;

    @prop(<any>{required: true, default: Date.now()})
    public createdAt?: Date;

    @prop()
    public modifiedAt?: Date;
}

export const UserModel = new User().getModelForClass(User);
