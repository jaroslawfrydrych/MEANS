import {User} from '../security/user.model';
import {UsersListView} from '../../models/usersListView';

export class UsersService {
    public static async getUsersList(): Promise<UsersListView | any> {
        const usersList = await User.getUsersList();
        return usersList.map(({_id, username, firstname, surname}: User) => {
            return {
                id: _id.toHexString(),
                username,
                firstname,
                surname
            };
        });
    }
}