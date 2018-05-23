import {User} from '../security/user.model';
import {UsersListView} from '../../models/usersListView';
import {UserDetailsView} from '../../models/userDetailsView';

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

    public static async getUserById(id: string) {
        return User.findByIdFields(id, 'username firstname surname');
    }

    public static async updateUser(id: string, data: UserDetailsView) {
        return User.updateUser(id, data);
    }
}