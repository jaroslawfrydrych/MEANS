import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecurityService} from '../../../security/security.service';
import {Router} from '@angular/router';
import {UserService} from '../../../security/user/user.service';
import {CurrentUserView} from '../../../api';
import {Subscription} from 'rxjs/index';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

    public initials: string = null;
    private subscriptions: Subscription = new Subscription();

    constructor(private securityService: SecurityService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        const currentUserSub = this.userService.currentUser
            .subscribe(user => {
                this.setUserInitials(user);
            });

        this.subscriptions.add(currentUserSub);
    }

    public logout(): void {
        const logoutHandlerSub = this.securityService.logoutHandler()
            .subscribe(() => {
                this.router.navigate(['/']);
            });

        this.subscriptions.add(logoutHandlerSub);
    }

    private setUserInitials(user): void {
        if (user.firstname && user.surname) {
            this.initials = user.firstname.charAt(0) + user.surname.charAt(0);
        } else {
            this.initials = user.username.substring(0, 2);
        }
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

}
