import {AppConfig} from './app.config';

export default (mongoose) => {

    const gracefulExit = function () {
        mongoose.connection.close(() => {
            console.log(`Mongoose connection ` +
                `has disconnected through app termination`);
            process.exit(0);
        });
    };

    mongoose.Promise = Promise;

    mongoose.connection.on('connected', () => {
        console.log(`Successfully connected to ${AppConfig.ENV}` +
            ` database on startup `);
    });

    mongoose.connection.on('error', (err) => {
        console.error(`Failed to connect to ${AppConfig.ENV} ` +
            ` database on startup `, err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log(`Mongoose default connection to ${AppConfig.ENV}` +
            ` database disconnected`);
    });

    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

    const mongoPort = AppConfig.MONGO.port ? ':' + AppConfig.MONGO.port : '';
    let mongoUserPassword = '';

    if (AppConfig.MONGO.username && AppConfig.MONGO.password) {
        mongoUserPassword = AppConfig.MONGO.username + ':' + AppConfig.MONGO.password + '@';
    }

    const uri: string =
        `mongodb://${mongoUserPassword + AppConfig.MONGO.host + mongoPort}/${AppConfig.MONGO.database}`;
    mongoose.connect(uri, (error) => {
        if (error) {
            throw error;
        }
    });
};
