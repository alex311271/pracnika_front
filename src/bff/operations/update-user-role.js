import { setUserRole } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const updateUseRole = async (userSession, userId, newUserRoleId) => {
	const accessRole = [ROLE.ADMIN];
	if (!sessions.access(userSession, accessRole)) {
		return {
			error: 'Недостаточно прав доступа',
			res: null,
		};
	}
	setUserRole(userId, newUserRoleId);
	return {
		error: null,
		res: true,
	};
};
