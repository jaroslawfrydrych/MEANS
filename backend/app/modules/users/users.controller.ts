import {UsersService} from './users.service';
import {UsersListView} from '../../models/usersListView';
import {errorHandler} from '../../../core/core.controller';
import {User} from '../security/user.model';

export function usersListQuery(req, res, next) {
    UsersService.getUsersList()
        .then((usersList: UsersListView) => {
            res.json(usersList);
        });
}

export function userNewHandler(req, res, next) {
    const content: any = req.swagger.params['content'].value;
    User.createUser(content)
        .then(() => {
            return res.status(200).send();
        })
        .catch(err => errorHandler(res, err));
}