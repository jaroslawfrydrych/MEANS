import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {CoreModule} from '../../core/core.module';
import {UsersRoutingModule} from './users-routing.module';
import { UsersNewComponent } from './users-new/users-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const COMPONENTS = [
    UsersListComponent,
    UsersNewComponent
];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        UsersRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ...COMPONENTS
    ]
})
export class UsersModule {
}
