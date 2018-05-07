import {Injectable} from '@angular/core';
import {LoginParameters, SecurityService as SecurityApiService} from '../../../../api';
import {Observable, ReplaySubject} from 'rxjs';
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
        const subject: ReplaySubject<null> = new ReplaySubject<null>(1);
        this.securityApiService.logoutHandler()
            .subscribe(() => {
                this.userService.clearUser();
                subject.next(null);
            }, () => {
                this.userService.clearUser();
                subject.next(null);
            });

        return subject;
    }
}
