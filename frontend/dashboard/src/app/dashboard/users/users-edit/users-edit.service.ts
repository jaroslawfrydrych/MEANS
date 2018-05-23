import {Injectable} from '@angular/core';
import {UsersService} from '../../../../../../api';
import {UserDetailsView} from '../../../../../../api/model/userDetailsView';
import {Observable} from 'rxjs/index';
import {ActivatedRouteSnapshot} from '@angular/router';

@Injectable(<any>{
    providedIn: 'root'
})
export class UsersEditService {

    constructor(private usersService: UsersService) {
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<UserDetailsView> {
        return this.usersService.userDetailsQuery(route.params['id']);
    }

    public updateUser(id: string, data: UserDetailsView): Observable<any> {
        return this.usersService.userDetailsUpdateHandler(id, data);
    }
}
