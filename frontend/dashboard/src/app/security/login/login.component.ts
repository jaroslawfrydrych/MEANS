import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {SecurityService} from '../security.service';
import {CoreService} from '../../core/core.service';
import {Subscription} from 'rxjs/index';
import {ToastService} from '../../core/toast/toast.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    public formGroup: FormGroup;
    public wrongCredentials: boolean = false;
    private loginHandlerSubsription: Subscription = new Subscription();

    constructor(private formBuilder: FormBuilder,
                private securityService: SecurityService,
                private userService: UserService,
                private router: Router,
                private toastService: ToastService,
                private coreService: CoreService) {
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    public onFormSubmit() {
        this.wrongCredentials = false;
        this.loginHandlerSubsription = this.securityService.loginHandler(this.formGroup.getRawValue())
            .subscribe(() => {
                this.userService.currentUser
                    .subscribe(user => {
                        if (user) {
                            const userName = user.firstname && user.surname ? user.firstname + ' ' + user.surname : user.username;
                            this.toastService.showToast(`Welcome back, ${userName}! You have been logged in.`);
                            this.router.navigate([this.coreService.homePage]);
                        }
                    });
            }, err => {
                if (err.status === 403) {
                    this.wrongCredentials = true;
                }
            });
    }

    ngOnDestroy() {
        if (this.loginHandlerSubsription) {
            this.loginHandlerSubsription.unsubscribe();
        }
    }
}
