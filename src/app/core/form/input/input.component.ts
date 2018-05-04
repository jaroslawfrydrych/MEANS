import {Component, forwardRef, Host, HostBinding, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {AbstractControl, ControlContainer, NG_VALUE_ACCESSOR} from '@angular/forms';
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
    @Input() helper: string = null;
    @Input() formControlName: string;
    @Input() showErrors: boolean = true;
    public control: AbstractControl;
    public customError: string = null;
    private value: string = null;

    @HostBinding('class.focus') isFocus: boolean = false;

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

    writeValue(value) {
        this.value = value;
    }

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched(fn) {
        this.onTouched = fn;
    }

    onChange: any = () => {
    };

    onTouched: any = () => {
    };

    public focusIn() {
        this.isFocus = true;
    }

    public focusOut() {
        this.isFocus = false;
    }

    public hasError(errorType) {
        if (this.control.errors && this.control.touched) {
            if (typeof this.control.errors[errorType] !== 'undefined') {
                return true;
            }
        }

        return false;
    }

}
