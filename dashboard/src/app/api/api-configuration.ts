import {Configuration} from './configuration';

export function apiConfiguration(): Configuration {
    const conf = new Configuration();
    conf.withCredentials = true;
    conf.basePath = generateBasePath();
    return conf;
}

function generateBasePath() {
    return '/api';
}
