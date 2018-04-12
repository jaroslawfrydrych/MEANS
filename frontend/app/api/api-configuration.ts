import {Configuration} from './security';

export function apiConfiguration(): Configuration {
    let conf = new Configuration();
    conf.withCredentials = true;
    conf.basePath = generateBasePath();
    return conf;
}

function generateBasePath() {
    return '/api';
}
