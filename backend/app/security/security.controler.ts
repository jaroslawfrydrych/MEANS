import * as express from 'express';

export class SecurityControler {
    public login(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body.username === 'username' && req.body.password === 'password') {
            res.json({
                status: 'OK'
            });
        } else {
            res.status(401)
                .send('Niepoprawne dane logowania');
        }
    }
}