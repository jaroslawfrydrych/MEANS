import {LoginParameters} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';
import {Jwt} from '../../../core/jwt';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class SecurityService {

    public static setAccessTokenCookie(res, id: string): string {
        return Jwt.setAccessTokenCookie(res, id);
    }

    public static setRefreshTokenCookie(res, id: string): string {
        return Jwt.setRefreshTokenCookie(res, id);
    }

    public static clearTokenCookies(res): void {
        Jwt.clearTokenCookies(res);
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

    public logout(res, tokens): Observable<{}> {
        SecurityService.clearTokenCookies(res);
        return Observable.of({});
    }
}
