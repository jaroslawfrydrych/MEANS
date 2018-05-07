import {SecurityService} from './security.service';
import {LoginParameters} from '../../models/models';
import {errorHandler} from '../../../core/core.controller';
import {User} from './user.model';

export function loginHandler(req, res, next) {
    const content: LoginParameters = req.swagger.params['content'].value;

    SecurityService.validateUser(content)
        .then(userId => {
            if (userId) {
                SecurityService.setAccessTokenCookie(res, userId);
                return SecurityService.setRefreshTokenCookie(res, userId)
                    .subscribe(() => {
                        return res.status(200).send();
                    }, err => errorHandler(res, err));
            }

            return res.status(403).send('Invalid credentials');
        }).catch(err => errorHandler(res, err));
}

export function logoutHandler(req, res, next) {
    const tokens = {
        refresh: req.cookies.REFRESH || null,
        access: req.cookies.BEARER || null
    };

    SecurityService.logout(res, tokens)
        .then(() => {
            res.send();
        }, err => errorHandler(res, err));
}

export function currentUserQuery(req, res, next) {
    const {username, firstname, surname} = req.user;

    return res.json({
        username,
        firstname,
        surname
    });
}
