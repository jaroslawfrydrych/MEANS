import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {CoreModule} from '../../core/core.module';

const COMPONENTS = [
    UsersListComponent
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule
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
