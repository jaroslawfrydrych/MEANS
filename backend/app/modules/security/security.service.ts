import {LoginParameters, UserNew} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User, UserModel} from './user.model';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {Jwt} from '../../../core/jwt';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class SecurityService {

    public static setCookie(res, id: string): void {
        res.cookie(
            'BEARER',
            Jwt.generateToken({id}),
            {
                expires: new Date(Date.now() + 900000),
                httpOnly: true,
                secure: false
            });
    }

    constructor() {
    }

    public validateUser({username, password}: LoginParameters): Observable<string | null> {
        return User.findByUsername(username)
            .map(user => {
                if (user && User.validPassword(password, user.password)) {
                    return user['_id'];
                }

                return null;
            });
    }

    public createUser(content: UserNew): Observable<{}> {
        const user = new UserModel(content);
        return fromPromise(user.save());
    }
}
