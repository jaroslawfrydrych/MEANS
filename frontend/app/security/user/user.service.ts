import {Injectable} from '@angular/core';
import {CurrentUserView, SecurityService as SecurityApiService} from '../../api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

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
        return this.securityApiService.currentUserQuery()
            .map(userData => {
                this.setUser(userData);
                return userData;
            });
    }

    public clearUser() {
        this.setUser(null);
    }
}
