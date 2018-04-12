import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApiModule as SecurityApiModule, SecurityService} from '../api/security';
import {apiConfiguration} from '../api/api-configuration';

const COMPONENTS = [
    LoginComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SecurityApiModule.forRoot(apiConfiguration)
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ],
    providers: [
        SecurityService
    ]
})
export class SecurityModule {
}
