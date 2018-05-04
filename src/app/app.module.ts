import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {SecurityModule} from './security/security.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthGuard} from './security/auth.guard';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        CoreModule,
        DashboardModule,
        SecurityModule
    ],
    providers: [
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
