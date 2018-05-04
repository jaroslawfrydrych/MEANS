import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class CoreService {

    constructor(private router: Router) {
    }

    public get homePage(): string {
        return this.router.config[0].path;
    }
}
