import {Injectable} from '@angular/core';
import {UsersService} from '../../../../../../api';
import {UserNew} from '../../../../../../api/model/userNew';
import {Observable} from 'rxjs/index';

@Injectable(<any>{
    providedIn: 'root'
})
export class UsersNewService {

    constructor(private usersService: UsersService) {
    }

    public saveUser(content: UserNew): Observable<any> {
        return this.usersService.userNewHandler(content);
    }
}
