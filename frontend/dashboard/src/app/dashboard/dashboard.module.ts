import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutes} from './dashboard.routes';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard.component';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from '../core/core.module';
import {UsersModule} from './users/users.module';

@NgModule({
    imports: [
        CommonModule,
        UsersModule,
        RouterModule.forRoot(DashboardRoutes),
        LayoutModule,
        CoreModule
    ],
    declarations: [
        HomeComponent,
        DashboardComponent
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule {
}
