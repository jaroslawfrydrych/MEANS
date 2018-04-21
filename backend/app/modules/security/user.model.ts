import {prop, Typegoose, pre} from 'typegoose';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {Observable} from 'rxjs/Observable';
import * as  bcrypt from 'bcrypt-nodejs';
import {CurrentUserView} from '../../models/currentUserView';
import {UserNew} from '../../models/models';

@pre<User>('save', function(next) {
    this.password = User.hashPassword(this.password);
    next();
})

export class User extends Typegoose {
    public static findByUsername(username: string): Observable<User> {
        return fromPromise(UserModel.findOne({
            username
        }));
    }

    public static findById(id: string): Observable<User> {
        return fromPromise(UserModel.findById(id));
    }

    public static hashPassword(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }

    public static validPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }

    public static createUser(content: UserNew): Observable<{}> {
        const user = new UserModel(content);
        return fromPromise(user.save());
    }

    @prop({required: true, unique: true})
    public username?: string;

    @prop({required: true})
    public password?: string;

    @prop({required: true, default: Date.now()})
    public createdAt?: Date;

    @prop()
    public modifiedAt?: Date;
}

export const UserModel = new User().getModelForClass(User);
