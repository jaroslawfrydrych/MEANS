import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [
        LoginService
    ]
})
export class LoginComponent implements OnInit {

    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loginService: LoginService) {
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    public onFormSubmit(event: Event) {
        event.preventDefault();
        this.loginService.loginHandler(this.formGroup.getRawValue())
            .subscribe(res => {
                console.log(res);
            })
    }

}
