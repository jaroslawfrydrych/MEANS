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
    public currentUser: CurrentUserView;

    constructor(private userService: UserService,
                private securityService: SecurityService,
                private router: Router,
                private coreService: CoreService) {
    }

    ngOnInit() {
        this.coreService.homePage;
        this.userService.currentUser
            .subscribe(user => {
                this.currentUser = user;
            });
    }

    public logout() {
        this.securityService.logoutHandler()
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }

}
