import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SecurityComponent} from './security.component';
import {LoginGuard} from './login.guard';
import {PageNotFoundComponent} from '../core/page-not-found/page-not-found.component';
import {AuthGuard} from './auth.guard';

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
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthGuard]
    }
];
