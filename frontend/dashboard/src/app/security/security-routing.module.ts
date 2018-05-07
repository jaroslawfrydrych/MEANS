import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecurityComponent} from './security.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: SecurityComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SecurityRoutingModule {
}
