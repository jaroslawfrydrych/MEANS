import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {

    @Input('formGroup') public formGroup: FormGroup;
    @Output('submit') public submit: EventEmitter<null> = new EventEmitter<null>();

    constructor() {
    }

    public onFormSubmit(): void {
        this.submit.emit(null);
    }

}
