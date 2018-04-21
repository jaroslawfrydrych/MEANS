import {LoginParameters} from '../../models/models';
import {Observable} from 'rxjs/Observable';
import {User} from './user.model';
import {Jwt} from '../../../core/jwt';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {InvalidTokenModel} from './invalid-token.model';

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

    public static createRefreshToken() {
        // TODO save in db refresh token
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

    public async logout(res, {access, refresh}): Promise<{}> {
        // TODO db blaclist token
        const invalidAccessToken = new InvalidTokenModel({token: access, type: 'access'});
        await invalidAccessToken.save();

        if (refresh) {
            const invalidRefreshToken = new InvalidTokenModel({token: refresh, type: 'refresh'});
            await invalidRefreshToken.save();
        }

        SecurityService.clearTokenCookies(res);
        return {};
    }
}
