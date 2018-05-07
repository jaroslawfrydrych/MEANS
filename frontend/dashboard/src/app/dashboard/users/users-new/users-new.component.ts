import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersNewService} from './users-new.service';
import {Router} from '@angular/router';
import {ToastService} from '../../../core/toast/toast.service';
import {ToastTypes} from '../../../core/toast/toast-types.enum';

@Component({
    selector: 'app-users-new',
    templateUrl: './users-new.component.html',
    styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {

    public formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private usersNewService: UsersNewService,
                private router: Router,
                private toastService: ToastService) {
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl(null, {validators: Validators.required}),
            password: new FormControl(null, {validators: Validators.required}),
            firstname: new FormControl(null, {}),
            surname: new FormControl(null, {}),
        });
    }

    public saveUser() {
        this.usersNewService.saveUser(this.formGroup.getRawValue())
            .subscribe(() => {
                this.router.navigate(['/users']);
                this.toastService.showToast('User created', ToastTypes.Success);
            });
    }

}
