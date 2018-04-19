import * as path from 'path';
import * as swaggerTools from 'swagger-tools';
import {AppConfig} from './app.config';

export default (app, swaggerDoc) => {
    const options = {
        swaggerUi: path.join(__dirname, '/swagger.json'),
        controllers: path.join(__dirname, AppConfig.SWAGGER_CONTROLLERS),
        useStubs: process.env.NODE_ENV === AppConfig.ENV
    };

    swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
        // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
        app.use(middleware.swaggerMetadata());

        // Validate Swagger requests
        app.use(middleware.swaggerValidator());

        // Route validated requests to appropriate controller
        app.use(middleware.swaggerRouter(options));

        // Serve the Swagger documents and Swagger UI
        app.use(middleware.swaggerUi());
    });

}