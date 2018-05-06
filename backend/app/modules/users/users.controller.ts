import {UsersService} from './users.service';
import {UsersListView} from '../../models/usersListView';

export function usersListQuery(req, res, next) {
    UsersService.getUsersList()
        .then((usersList: UsersListView) => {
            res.json(usersList);
        });
}
