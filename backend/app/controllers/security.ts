import {SecurityService} from './security/security.service';
import {LoginParameters} from '../models';

const securityService: SecurityService = new SecurityService();

export function loginHandler(req, res, next) {
    const content: LoginParameters = req.swagger.params['content'].value;

    securityService.login(content)
        .subscribe((result) => {
            if(result) {
                return res.status(200).send();
            }

            return res.status(403).send();
        }, err => {
            // TODO error handler
            console.error(err);
        });
}