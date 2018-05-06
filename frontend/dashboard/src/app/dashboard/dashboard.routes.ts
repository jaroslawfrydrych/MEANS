import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../security/auth.guard';
import {UsersRoutes} from './users/users.routes';

export const DashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            ...UsersRoutes
        ]

    }
];
