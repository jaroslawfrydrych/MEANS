import * as mongoose from 'mongoose';

export class SecurityService {
    constructor() {

    }

    public login(username: string, password: string) {
        this.getUser(username);
    }

    public getUser(username: string) {

    }
}