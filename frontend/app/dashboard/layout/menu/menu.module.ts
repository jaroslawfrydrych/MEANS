import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {RouterModule} from '@angular/router';

const COMPONENTS = [
    MenuComponent,
    MenuItemComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class MenuModule {
}
