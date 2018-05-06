import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SecurityComponent} from './security.component';
import {LoginGuard} from './login.guard';

export const SecurityRoutes: Routes = [
    {
        path: 'login',
        component: SecurityComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
];
