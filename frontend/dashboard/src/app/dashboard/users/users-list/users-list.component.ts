import {Component, OnInit} from '@angular/core';
import {UsersListService} from './users-list.service';
import {Observable} from 'rxjs/index';
import {UsersListView} from '../../../../../../api/model/usersListView';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public usersList: Observable<UsersListView>;

    constructor(private usersListService: UsersListService) {
    }

    ngOnInit() {
        this.usersList = this.usersListService.getUsersList();
    }

}
