import {LoginParameters} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';
import {Jwt} from '../../../core/jwt';
import {InvalidToken} from './invalid-token.model';
import {fromPromise} from 'rxjs/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {RefreshToken} from './refresh-token.model';

export class SecurityService {

    public static setAccessTokenCookie(res, id: string): string {
        return Jwt.setAccessTokenCookie(res, id);
    }

    public static setRefreshTokenCookie(res, id: string): Observable<string> {
        return fromPromise(Jwt.setRefreshTokenCookie(res, id));
    }

    public static clearTokenCookies(res): void {
        Jwt.clearTokenCookies(res);
    }

    public static async logout(res, {access, refresh}): Promise<{}> {
        await InvalidToken.addToken(access);

        if (refresh) {
            await RefreshToken.removeToken(refresh);
        }

        SecurityService.clearTokenCookies(res);
        return {};
    }

    public static validateUser({username, password}: LoginParameters): Observable<string | null> {
        return User.findByUsername(username)
            .map(user => {
                if (user && User.validPassword(password, user.password)) {
                    return user['_id'];
                }

                return null;
            });
    }

    constructor() {
    }
}
