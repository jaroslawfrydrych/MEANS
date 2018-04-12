import {RoutesInterface} from '../../core/routes.interface';
import {RoutesController} from '../../core/routes.controller';
import * as express from 'express';
import {SecurityController} from './security.controller';

export class SecurityRoutes extends RoutesController implements RoutesInterface {
    protected securityCtrl: SecurityController = new SecurityController();

    constructor(protected app: express.Application,
                protected router: express.Router) {
        super(app, router);
    }

    public static bootstrap(app, router) {
        return new SecurityRoutes(app, router);
    }

    public routes() { 
        this.router.post('/security/login', this.securityCtrl.login.bind(this.securityCtrl.login));
    }
}
