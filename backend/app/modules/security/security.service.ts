import {LoginParameters} from '../../models/models';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {Jwt} from '../../../core/jwt';
import {InvalidToken} from './invalid-token.model';
import {RefreshToken, RefreshTokenModel} from './refresh-token.model';
import {fromPromise} from 'rxjs/internal/observable/fromPromise';
import {map} from 'rxjs/operators';
import {reject} from 'q';

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

    public static async validateUser({username, password}: LoginParameters): Promise<string | null> {
        try {
            const user = await User.findByUsername(username);

            if (user && User.validPassword(password, user.password)) {
                return user['_id'];
            }

            return null;

        } catch (error) {
            throw new Error(error);
        }
    }

    constructor() {
    }
}
