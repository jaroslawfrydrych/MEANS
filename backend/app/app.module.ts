import {AppRoutes} from './app.routes';
import * as express from 'express';
import swagger from '../core/swagger';

export default (app) => {
    const router: express.Router = express.Router();

    router.use((req, res, next) => {
        console.log(`I sense a disturbance in the force on url ${req.url}...`); // DEBUG
        next();
    });

    AppRoutes.bootstrap(app, router).routes();

    swagger(app);

    app.use('/api', router);
}
