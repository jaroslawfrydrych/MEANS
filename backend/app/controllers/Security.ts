import {SecurityService} from '../services/SecurityService';
import {LoginParameters} from '../models';

const securityService: SecurityService = new SecurityService();

export function loginHandler(req, res, next) {
    const content: LoginParameters = req.swagger.params['content'].value;

    securityService.login(content);
    res.json(content);
}