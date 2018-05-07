import {Injectable} from '@angular/core';

@Injectable(<any>{
    providedIn: 'root'
})
export class CoreService {

    constructor() {
    }

    public get loginPage(): string {
        return 'login';
    }

    public get homePage(): string {
        return '';
    }
}
