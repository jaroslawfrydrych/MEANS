import {Component, OnInit} from '@angular/core';
import {UsersListService} from './users-list.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    public usersList;

    constructor(private usersListService: UsersListService) {
    }

    ngOnInit() {
        this.usersList = this.usersListService.getUsersList();
    }

}
