import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
    selector: 'app-base-form-control',
    templateUrl: './base-form-control.component.html',
    styleUrls: ['./base-form-control.component.css']
})
export class BaseFormControlComponent implements OnInit {
    public control: AbstractControl;
    private value: string = null;
    @Input() public formControlName: string;
    @HostBinding('class.focus') isFocused: boolean = false;

    constructor() {
    }

    ngOnInit() {
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
    }

    onTouched: any = () => {
    }


    public onBlur() {
        this.isFocused = true;
    }

    public onFocus() {
        this.isFocused = false;
    }

}
