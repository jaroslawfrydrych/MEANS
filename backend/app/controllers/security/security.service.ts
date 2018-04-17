import {LoginParameters} from '../../models';
import {Observable} from 'rxjs/Observable';
import {User, UserSchema} from './user.model';
import {fromPromise} from 'rxjs/observable/fromPromise';
import * as  bcrypt from 'bcrypt-nodejs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'

export class SecurityService {
    constructor() {

    }

    public login({username, password}: LoginParameters): Observable<boolean> {
        return this.getUser(username)
            .map(user => {
                if(user) {
                    return SecurityService.validPassword(password, user.password);
                } else {
                    return false;
                }
            });
    }

    public getUser(username: string): Observable<User> {
        return fromPromise(UserSchema.findOne({
            username: username
        }));
    }

    public static hashPassword(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    }

    public static validPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}