import * as mongoose from 'mongoose';
import {LoginParameters} from '../models';

export class SecurityService {
    constructor() {

    }

    public login({username, password}: LoginParameters) {
        this.getUser(username);
    }

    public getUser(username: string) {

    }
}