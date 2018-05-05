import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormModule} from './form/form.module';
import {ToastModule} from './toast/toast.module';
import {ButtonsModule} from './buttons/buttons.module';
import {CardModule} from './card/card.module';

const MODULES = [
    FormModule,
    ToastModule,
    ButtonsModule,
    CardModule
];

@NgModule({
    imports: [
        CommonModule,
        ...MODULES
    ],
    declarations: [
    ],
    exports: [
        ...MODULES
    ]
})
export class CoreModule {
}
