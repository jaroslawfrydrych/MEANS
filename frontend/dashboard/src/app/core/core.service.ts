import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable(<any>{
    providedIn: 'root'
})
export class CoreService {

    private homeRoute: string = '';

    constructor(private router: Router) {
    }

    public get loginPage(): string {
        return 'login';
    }

    public get homePage(): string {
        if (!this.homeRoute) {
            this.checkRoutesForHomeRoute(this.router.config);
        }
        return this.homeRoute;
    }

    private checkRoutesForHomeRoute(routes): void {
        this.homeRoute += '/' + routes[0].path;

        if (routes[0].children && routes[0].children.length) {
            this.checkRoutesForHomeRoute(routes[0].children);
        }
    }
}
