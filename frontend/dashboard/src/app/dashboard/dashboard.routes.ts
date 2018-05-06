import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../security/auth.guard';
import {UsersComponent} from './users/users.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

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
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]
    }
];
