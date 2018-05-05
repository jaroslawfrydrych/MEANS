import {Component, forwardRef, Host, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {ControlContainer, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseFormControlComponent} from '../base-form-control/base-form-control.component';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent), multi: true}
    ]
})
export class InputComponent extends BaseFormControlComponent implements OnInit {
    @Input() public type: string = 'text';
    @Input() public placeholder: string = '';

    constructor(@Optional() @Host() @SkipSelf() private controlContainer: ControlContainer) {
        super();
    }

    ngOnInit() {
        if (this.controlContainer) {
            if (this.formControlName) {
                this.control = this.controlContainer.control.get(this.formControlName);
            }
        }
    }


}
