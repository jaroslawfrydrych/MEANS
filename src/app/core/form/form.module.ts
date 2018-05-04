import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseFormControlComponent} from './base-form-control/base-form-control.component';
import {InputComponent} from './input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const COMPONENTS = [
    InputComponent,
    BaseFormControlComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class FormModule {
}
