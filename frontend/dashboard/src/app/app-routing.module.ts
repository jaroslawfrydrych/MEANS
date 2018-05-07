import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SecurityModule} from './security/security.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthGuard} from './security/auth.guard';
import {LoginGuard} from './security/login.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => DashboardModule
    },
    {
        path: 'login',
        canActivate: [LoginGuard],
        loadChildren: () => SecurityModule
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
