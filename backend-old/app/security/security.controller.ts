import * as express from 'express';
import {Login} from './model/login';

export class SecurityController {
    public login(req: express.Request, res: express.Response, next: express.NextFunction) {
        const body: Login = req.body;

        if (body.username === 'username' && body.password === 'password') {
            res.json({
                status: 'OK'
            });
        } else {
            res.status(403)
                .send('Niepoprawne dane logowania');
        }
    }
}