import {RoutesInterface} from '../../core/routes.interface';
import {RoutesControler} from '../../core/routes.controler';
import * as express from 'express';
import {SecurityControler} from './security.controler';

export class SecurityRoutes extends RoutesControler implements RoutesInterface {
    protected securityCtrl: SecurityControler = new SecurityControler();

    constructor(protected app: express.Application,
                protected router: express.Router) {
        super(app, router);
    }

    public static bootstrap(app, router) {
        return new SecurityRoutes(app, router);
    }

    public routes() {
        this.router.post('/login', this.securityCtrl.login.bind(this.securityCtrl.login));
    }
}
