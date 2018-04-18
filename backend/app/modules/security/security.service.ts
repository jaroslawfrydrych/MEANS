import {LoginParameters, UserNew} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User, UserModel} from './user.model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'

export class SecurityService {
    constructor() {
    }

    public login({username, password}: LoginParameters): Observable<boolean> {
        return User.findByUsername(username)
            .map(user => {
                if (user) {
                    return User.validPassword(password, user.password);
                } else {
                    return false;
                }
            });
    }

    public createUser(content: UserNew): Observable<{}> {
        const user = new UserModel(content);
        return user.createUser()
    }

    public setCookie(res): void {
        res.cookie('BEARER', 'token', {expires: new Date(Date.now() + 900000), httpOnly: true, secure: true});
    }
}