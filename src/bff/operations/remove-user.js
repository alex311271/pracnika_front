import { deleteUser } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeUser = async (userSession, userId) => {
	const accessRole = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRole)) {
		return {
			error: 'Недостаточно прав доступа',
			res: null,
		};
	}
	deleteUser(userId);
	return {
		error: null,
		res: true,
	};
};
