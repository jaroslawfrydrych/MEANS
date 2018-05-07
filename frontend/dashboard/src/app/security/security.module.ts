import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SecurityService as SecurityApiService} from '../../../../api';
import {RouterModule} from '@angular/router';
import {SecurityComponent} from './security.component';
import {UserService} from './user/user.service';
import {SecurityService} from './security.service';
import {CoreModule} from '../core/core.module';
import {SecurityRoutingModule} from './security-routing.module';

const COMPONENTS = [
    LoginComponent,
    SecurityComponent
];

@NgModule({
    imports: [
        CommonModule,
        SecurityRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        SecurityApiService,
        UserService,
        SecurityService
    ],
    exports: [
        RouterModule
    ]
})
export class SecurityModule {
}
