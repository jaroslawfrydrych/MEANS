import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutes} from './dashboard.routes';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard.component';
import {LayoutModule} from './layout/layout.module';
import {UsersComponent} from './users/users.component';
import {CoreModule} from '../core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(DashboardRoutes),
        LayoutModule,
        CoreModule
    ],
    declarations: [
        HomeComponent,
        DashboardComponent,
        UsersComponent,
        PageNotFoundComponent
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardModule {
}
