import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDetailsView} from '../../../../../../api';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersEditService} from './users-edit.service';
import {ToastTypes} from '../../../core/toast/toast-types.enum';
import {ToastService} from '../../../core/toast/toast.service';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

    public formGroup: FormGroup;
    public userData: UserDetailsView;
    public id: string;

    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private usersEditService: UsersEditService,
                private router: Router,
                private toastService: ToastService) {
    }

    ngOnInit() {
        this.userData = this.activatedRoute.snapshot.data['data'];
        this.id = this.activatedRoute.snapshot.params['id'];

        this.formGroup = this.formBuilder.group({
            username: new FormControl(this.userData.username, {validators: Validators.required}),
            firstname: new FormControl(this.userData.firstname, {}),
            surname: new FormControl(this.userData.surname, {}),
        });
    }


    public saveUser() {
        this.usersEditService.updateUser(this.id, this.formGroup.getRawValue())
            .subscribe(() => {
                this.router.navigate(['/users']);
                this.toastService.showToast('User updated', ToastTypes.Success);
            });
    }
}
