import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-users-edit',
    templateUrl: './users-edit.component.html',
    styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

    private formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: new FormControl(null, {validators: Validators.required}),
            password: new FormControl(null, {validators: Validators.required}),
            firstname: new FormControl(null, {}),
            surname: new FormControl(null, {}),
        });
    }

}
