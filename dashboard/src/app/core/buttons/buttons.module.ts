import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button/button.component';
import {ButtonCircleComponent} from './button-circle/button-circle.component';
import {ButtonIconComponent} from './button-icon/button-icon.component';

const COMPONENTS = [
    ButtonComponent,
    ButtonCircleComponent,
    ButtonIconComponent
];

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class ButtonsModule {
}
