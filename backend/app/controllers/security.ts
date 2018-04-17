import {SecurityService} from './security/security.service';
import {LoginParameters} from '../models';

const securityService: SecurityService = new SecurityService();

export function loginHandler(req, res, next) {
    const content: LoginParameters = req.swagger.params['content'].value;

    securityService.login(content)
        .subscribe((result) => {
            res.json(result);
        });
}