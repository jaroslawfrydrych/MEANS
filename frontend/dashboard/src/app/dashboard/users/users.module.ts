import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {CoreModule} from '../../core/core.module';
import {UsersRoutingModule} from './users-routing.module';

const COMPONENTS = [
    UsersListComponent
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        UsersRoutingModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class UsersModule {
}
