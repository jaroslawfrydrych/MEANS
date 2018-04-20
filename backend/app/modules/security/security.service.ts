import {LoginParameters, UserNew} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User, UserModel} from './user.model';
import {fromPromise} from 'rxjs/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class SecurityService {

    public static setCookie(res): void {
        res.cookie('BEARER', this.generateToken(), {expires: new Date(Date.now() + 900000), httpOnly: true, secure: false});
    }

    private static generateToken(): string {
        return 'eyJhbGciOiJIUzI1NiJ9.e30.LGeuoyBj5ZeiZC0dYrYCHJs1-4WHGiFeyqXN3hBTRPI';
    }

    constructor() {
    }

    public validateUser({username, password}: LoginParameters): Observable<boolean> {
        return User.findByUsername(username)
            .map(user => {
                if (user) {
                    return User.validPassword(password, user.password);
                }

                return false;
            });
    }

    public createUser(content: UserNew): Observable<{}> {
        const user = new UserModel(content);
        return fromPromise(user.save());
    }
}
