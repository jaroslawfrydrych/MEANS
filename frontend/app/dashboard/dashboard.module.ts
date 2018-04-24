import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutes} from './dashboard.routes';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard.component';
import {UserService} from '../security/user/user.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(DashboardRoutes)
    ],
    declarations: [
        HomeComponent,
        DashboardComponent
    ],
    providers: [
        UserService
    ]
})
export class DashboardModule {
}
