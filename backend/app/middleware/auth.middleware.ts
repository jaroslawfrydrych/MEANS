import {User} from '../modules/security/user.model';

export default (req, res, next, unprotected: Array<string>) => {
    if (unprotected.indexOf(req.url) !== -1) {
        return next();
    }

    User.findById(req.auth.id)
        .then(({username}) => {
            if (username) {
                req.user = {
                    username
                };
                return next();
            }
            res.status(500).send('Nie znaleziono użytkownika');
        })
        .catch(err => {
            res.status(500).send('Wystąpił bład autoryzacji');
        });

};
