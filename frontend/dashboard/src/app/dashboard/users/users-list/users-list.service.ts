import {Injectable} from '@angular/core';
import {UsersService} from '../../../../../../api';
import {Observable} from 'rxjs/index';
import {UsersListView} from '../../../../../../api/model/usersListView';

@Injectable(<any>{
    providedIn: 'root'
})
export class UsersListService {

    constructor(private usersService: UsersService) {
    }

    getUsersList(page?: number, count?: number, sortDirection?: string, sortOrder?: string): Observable<UsersListView> {
        return this.usersService.usersListQuery(page, count, sortDirection, sortOrder);
    }

}
