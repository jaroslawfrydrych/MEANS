import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../../../security/security.service';
import {Router} from '@angular/router';
import {UserService} from '../../../security/user/user.service';
import {CurrentUserView} from '../../../api';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    public currentUser: CurrentUserView;

    constructor(private securityService: SecurityService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
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
