import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {SecurityModule} from './security/security.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthGuard} from './security/auth.guard';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from './api/api-interceptor';
import {ToastService} from './core/toast/toast.service';

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
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true,
            deps: [ToastService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
