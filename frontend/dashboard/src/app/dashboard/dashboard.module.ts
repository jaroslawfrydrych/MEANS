import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from '../core/core.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        LayoutModule,
        CoreModule
    ],
    declarations: [
        HomeComponent,
        DashboardComponent
    ]
})
export class DashboardModule {
}
