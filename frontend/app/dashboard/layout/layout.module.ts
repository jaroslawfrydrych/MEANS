import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuModule} from './menu/menu.module';
import {TopBarComponent} from './top-bar/top-bar.component';
import {UserService} from '../../security/user/user.service';

const COMPONENTS = [
    TopBarComponent
];

@NgModule({
    imports: [
        CommonModule,
        MenuModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS,
        MenuModule
    ],
    providers: [
        UserService
    ]
})
export class LayoutModule {
}
