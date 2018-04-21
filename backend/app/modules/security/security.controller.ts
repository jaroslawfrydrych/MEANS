import {SecurityService} from './security.service';
import {LoginParameters} from '../../models/models';
import {errorHandler} from '../../../core/core.controller';
import {User} from './user.model';

const securityService: SecurityService = new SecurityService();

export function loginHandler(req, res, next) {
    const content: LoginParameters = req.swagger.params['content'].value;

    securityService.validateUser(content)
        .subscribe(userId => {
            if (userId) {
                SecurityService.setAccessTokenCookie(res, userId);
                SecurityService.setRefreshTokenCookie(res, userId);
                return res.status(200).send();
            }

            return res.status(403).send();
        }, err => errorHandler(res, err));
}

export function logoutHandler(req, res, next) {
    const tokens = {
        refresh: req.cookies.REFRESH || null,
        access: req.cookies.BEARER || null
    };

    securityService.logout(res, tokens)
        .then(() => {
            res.send();
        }, err => errorHandler(res, err));
}

export function userNewHandler(req, res, next) {
    const content: any = req.swagger.params['content'].value;
    User.createUser(content)
        .subscribe(() => {
            return res.status(200).send();
        }, err => errorHandler(res, err));
}

export function currentUserQuery(req, res, next) {
    const {username} = req.user;
    return res.json({
        username
    });
}
