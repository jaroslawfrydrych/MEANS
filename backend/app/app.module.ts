import {AppRoutes} from './app.routes';
import * as express from 'express';
import {SecurityRoutes} from './security/security.routes';

export default (app) => {
    const router: express.Router = express.Router();

    router.use((req, res, next) => {
        console.log(`I sense a disturbance in the force on url ${req.url}...`); // DEBUG
        next();
    });

    AppRoutes.bootstrap(app, router).routes();
    SecurityRoutes.bootstrap(app, router).routes();

    app.use('/api', router);
}
