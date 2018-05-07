import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormModule} from './form/form.module';
import {ToastModule} from './toast/toast.module';
import {ButtonsModule} from './buttons/buttons.module';
import {CardModule} from './card/card.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const MODULES = [
    FormModule,
    ToastModule,
    ButtonsModule,
    CardModule
];

const COMPONENTS = [
];

@NgModule({
    imports: [
        CommonModule,
        ...MODULES
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...MODULES,
        ...COMPONENTS
    ]
})
export class CoreModule {
}
