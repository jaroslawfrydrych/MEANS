import {LoginParameters} from '../../models';
import {Observable} from 'rxjs/Observable';
import {User, UserSchema} from './user.model';
import * as  bcrypt from 'bcrypt-nodejs';
import 'rxjs/add/observable/of';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {ReplaySubject} from 'rxjs/ReplaySubject';

export class SecurityService {
    constructor() {

    }

    public login({username, password}: LoginParameters): Observable<boolean> {
        const subject: ReplaySubject<boolean> = new ReplaySubject<boolean>();
        this.getUser(username)
            .subscribe(user => {
                const validation = SecurityService.validPassword(password, user.password);
                subject.next(validation);
            });

        return subject;
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