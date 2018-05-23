import {UsersService} from './users.service';
import {UsersListView} from '../../models/usersListView';
import {errorHandler} from '../../../core/core.controller';
import {User} from '../security/user.model';

export function usersListQuery(req, res, next) {
    UsersService.getUsersList()
        .then((usersList: UsersListView) => {
            res.json(usersList);
        })
        .catch(err => errorHandler(res, err));
}

export function userNewHandler(req, res, next) {
    const content: any = req.swagger.params['content'].value;
    User.createUser(content)
        .then(() => {
            return res.status(200).send();
        })
        .catch(err => errorHandler(res, err));
}

export function userDetailsQuery(req, res, next) {
    UsersService.getUserById(req.swagger.params.id.value)
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(err => errorHandler(res, err));
}

export function userDetailsUpdateHandler(req, res, next) {
    UsersService.updateUser(req.swagger.params.id.value, req.swagger.params.content.value)
        .then(() => {
            return res.status(200).send();
        })
        .catch(err => errorHandler(res, err));
}
