import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuthGuard} from './security/auth.guard';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from './api/api-interceptor';
import {ToastService} from './core/toast/toast.service';
import {AppRoutingModule} from './app-routing.module';
import {ApiModule} from '../../../api';
import {apiConfiguration} from './api/api-configuration';
import {LoginGuard} from './security/login.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ApiModule.forRoot(apiConfiguration)
    ],
    providers: [
        AuthGuard,
        LoginGuard,
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
