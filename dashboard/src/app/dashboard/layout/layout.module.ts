import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuModule} from './menu/menu.module';
import {TopBarComponent} from './top-bar/top-bar.component';
import {UserService} from '../../security/user/user.service';
import {CoreModule} from '../../core/core.module';

const COMPONENTS = [
    TopBarComponent
];

@NgModule({
    imports: [
        CommonModule,
        MenuModule,
        CoreModule
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
