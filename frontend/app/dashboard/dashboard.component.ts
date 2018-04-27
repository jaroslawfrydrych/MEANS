import {Component, OnInit} from '@angular/core';
import {UserService} from '../security/user/user.service';
import {CurrentUserView} from '../api';
import {SecurityService} from '../security/security.service';
import {Router} from '@angular/router';
import {CoreService} from '../core/core.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
