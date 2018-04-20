import {UserModel} from '../modules/security/user.model';

export default (req, res, next) => {
    UserModel.findById(req.auth.id)
        .then(user => {
            console.log('user', user);
            next();
        });
};
