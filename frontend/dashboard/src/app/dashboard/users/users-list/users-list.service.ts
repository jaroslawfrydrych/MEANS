import {Injectable} from '@angular/core';
import {UsersService} from '../../../../../../api';

@Injectable(<any>{
    providedIn: 'root'
})
export class UsersListService {

    constructor(private usersService: UsersService) {
    }

    getUsersList(page?: number, count?: number, sortDirection?: string, sortOrder?: string) {
        return this.usersService.usersListQuery(page, count, sortDirection, sortOrder);
    }

}
