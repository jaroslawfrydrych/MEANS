import {User} from '../modules/security/user.model';

export default (req, res, next, unprotected: Array<string>) => {
    if (unprotected.indexOf(req.url) !== -1) {
        return next();
    }

    User.findById(req.auth.id)
        .then(({username, firstname, surname}) => {
            if (username) {
                req.user = {
                    username,
                    firstname,
                    surname
                };
                return next();
            }
            res.status(500).send('Nie znaleziono użytkownika');
        })
        .catch(err => {
            res.status(500).send('Wystąpił bład autoryzacji');
        });

};
