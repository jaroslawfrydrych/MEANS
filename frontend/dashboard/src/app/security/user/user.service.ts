import {Injectable} from '@angular/core';
import {CurrentUserView, SecurityService as SecurityApiService} from '../../../../../api';
import {Observable, ReplaySubject, of} from 'rxjs';

@Injectable(<any>{
    providedIn: 'root'
})
export class UserService {
    private currentUserValue: CurrentUserView = null;

    constructor(private securityApiService: SecurityApiService) {
    }

    get currentUser(): Observable<CurrentUserView | null> {
        if (this.currentUserValue) {
            return of(this.currentUserValue);
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
