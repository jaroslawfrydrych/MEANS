import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {FormModule} from './form/form.module';
import {ToastModule} from './toast/toast.module';
import {ButtonsModule} from './buttons/buttons.module';

const COMPONENTS = [
    CardComponent
];

const MODULES = [
    FormModule,
    ToastModule,
    ButtonsModule
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
        ...COMPONENTS,
        ...MODULES
    ]
})
export class CoreModule {
}
