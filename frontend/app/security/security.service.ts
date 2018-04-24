import {Injectable} from '@angular/core';
import {LoginParameters, SecurityService as SecurityApiService} from '../api';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user/user.service';

@Injectable()
export class SecurityService {


    constructor(private securityApiService: SecurityApiService,
                private userService: UserService) {
    }

    public loginHandler(content: LoginParameters): Observable<any> {
        return this.securityApiService.loginHandler(content);
    }

    public logoutHandler(): Observable<any> {
        return this.securityApiService.logoutHandler()
            .map(logout => {
                this.userService.clearUser();
                return logout;
            });
    }
}
