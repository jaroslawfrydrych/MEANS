import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {SecurityService} from '../security.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private securityService: SecurityService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    public onFormSubmit(event: Event) {
        event.preventDefault();
        this.securityService.loginHandler(this.formGroup.getRawValue())
            .subscribe(() => {
                this.userService.currentUser
                    .subscribe(() => {
                        this.router.navigate(['dashboard/home']);
                    });
            });
    }
}
