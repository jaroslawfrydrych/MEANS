import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SecurityComponent} from './security.component';

export const SecurityRoutes: Routes = [
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
