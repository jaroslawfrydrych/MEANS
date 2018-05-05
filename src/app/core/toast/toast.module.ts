import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './toast.component';
import {ButtonsModule} from '../buttons/buttons.module';

const COMPONENTS = [ToastComponent];



@NgModule({
    imports: [
        CommonModule,
        ButtonsModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    entryComponents: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class ToastModule {
    public static forRoot() {
    }
}
