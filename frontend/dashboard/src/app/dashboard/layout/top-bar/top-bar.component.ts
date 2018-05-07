import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SecurityService} from '../../../security/security.service';
import {Router} from '@angular/router';
import {UserService} from '../../../security/user/user.service';
import {CurrentUserView} from '../../../../../../api';
import {Subscription} from 'rxjs/index';
import {MenuService} from '../menu/menu/menu.service';
import {CoreService} from '../../../core/core.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

    public initials: string = null;
    private subscriptions: Subscription = new Subscription();
    public userProfileDropdownVisible: boolean = false;

    @ViewChild('userProfileDropdown') private userProfileDropdown: ElementRef;
    @ViewChild('userProfileButton') private userProfileButton: ElementRef;
    @HostListener('document:click', ['$event'])
    onDocumentClick(event) {
        if (!this.userProfileDropdownVisible || this.userProfileButton.nativeElement.contains(event.target)) {
            return;
        }

        if (!this.userProfileDropdown.nativeElement.contains(event.target)) {
            this.userProfileDropdownHide();
        }
    }

    constructor(private securityService: SecurityService,
                private userService: UserService,
                private router: Router,
                private coreService: CoreService,
                public menuService: MenuService) {
    }

    ngOnInit() {
        const currentUserSub = this.userService.currentUser
            .subscribe((user: CurrentUserView) => {
                this.setUserInitials(user);
            });

        this.subscriptions.add(currentUserSub);
    }

    public logout(): void {
        this.userProfileDropdownHide();
        const logoutHandlerSub = this.securityService.logoutHandler()
            .subscribe(() => {
                this.router.navigate([this.coreService.loginPage]);
            });

        this.subscriptions.add(logoutHandlerSub);
    }

    private setUserInitials(user: CurrentUserView): void {
        if (user.firstname && user.surname) {
            this.initials = user.firstname.charAt(0) + user.surname.charAt(0);
        } else {
            this.initials = user.username.substring(0, 2);
        }

        this.initials.toUpperCase();
    }

    public menuToggle() {
        this.menuService.toggleMenu();
    }

    public userProfileDropdownToggle() {
        this.userProfileDropdownVisible = !this.userProfileDropdownVisible;
    }

    private userProfileDropdownHide() {
        this.userProfileDropdownVisible = false;
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }

}
