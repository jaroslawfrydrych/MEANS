import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiModule as SecurityApiModule, SecurityService as SecurityApiService} from '../api';
import {apiConfiguration} from '../api/api-configuration';
import {RouterModule} from '@angular/router';
import {SecurityRoutes} from './security.routes';
import {SecurityComponent} from './security.component';
import {UserService} from './user/user.service';
import {SecurityService} from './security.service';

const COMPONENTS = [
    LoginComponent,
    SecurityComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(SecurityRoutes),
        SecurityApiModule.forRoot(apiConfiguration)
    ],
    declarations: [
        ...COMPONENTS
    ],
    providers: [
        SecurityApiService,
        UserService,
        SecurityService
    ]
})
export class SecurityModule {
}
