import {Injectable} from '@angular/core';
import {SecurityService, LoginParameters} from '../../api/security';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

    constructor(private securityService: SecurityService) {
    }

    public loginHandler(content: LoginParameters): Observable<any> {
        return this.securityService.loginHandler(content);
    }
}
