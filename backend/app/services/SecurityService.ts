import * as mongoose from 'mongoose';
import {LoginParameters} from '../models';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class SecurityService {
    constructor() {

    }

    public login({username, password}: LoginParameters): Observable<boolean> {
        this.getUser(username);
        return Observable.of(true);
    }

    public getUser(username: string) {

    }
}