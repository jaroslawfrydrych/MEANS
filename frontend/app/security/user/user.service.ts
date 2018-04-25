import {Injectable} from '@angular/core';
import {CurrentUserView, SecurityService as SecurityApiService} from '../../api';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    private currentUserValue: CurrentUserView = null;

    constructor(private securityApiService: SecurityApiService) {
    }

    get currentUser(): Observable<CurrentUserView | null> {
        if (this.currentUserValue) {
            return Observable.of(this.currentUserValue);
        }

        return this.getUserData();

    }

    private setUser(userData: CurrentUserView) {
        this.currentUserValue = userData;
    }


    private getUserData(): Observable<CurrentUserView> {
        const subject: ReplaySubject<CurrentUserView> = new ReplaySubject<CurrentUserView>(1);
        this.securityApiService.currentUserQuery()
            .subscribe(userData => {
                this.setUser(userData);
                subject.next(this.currentUserValue);
            }, () => {
                this.clearUser();
                subject.next(null);
            });

        return subject;
    }

    public clearUser() {
        this.setUser(null);
    }

    public checkCurrentUser(): Observable<boolean> {
        const subject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

        this.currentUser
            .subscribe(user => {
                if (user) {
                    return subject.next(true);
                }
                return subject.next(false);
            });

        return subject;
    }
}
