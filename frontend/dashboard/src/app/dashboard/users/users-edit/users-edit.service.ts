import {Injectable} from '@angular/core';
import {UsersService} from '../../../../../../api';
import {UserDetailsView} from '../../../../../../api/model/userDetailsView';
import {Observable} from 'rxjs/index';

@Injectable(<any>{
    providedIn: 'root'
})
export class UsersEditService {

    constructor(private usersService: UsersService) {
    }

    public getUser(id: string): Observable<UserDetailsView> {
        return this.usersService.userDetailsQuery(id);
    }
}
