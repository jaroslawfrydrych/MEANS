import {LoginParameters, UserNew} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User, UserModel} from './user.model';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {Jwt} from '../../../core/jwt';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {CurrentUserView} from '../../models/currentUserView';

export class SecurityService {

    public static setAccessTokenCookie(res, id: string): string {
        return Jwt.setAccessTokenCookie(res, id);
    }

    public static setRefreshTokenCookie(res, id: string): string {
        return Jwt.setRefreshTokenCookie(res, id);
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

    public getCurrentUser(userId: string): Observable<CurrentUserView> {
        return User.findById(userId)
            .map(user => {
                return {username: user.username};
            });
    }
}
