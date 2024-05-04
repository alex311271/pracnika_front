import {
	authorize,
	logout,
	register,
	fetchRoles,
	fetchUsers,
	updateUseRole,
	removeUser,
} from './operations';

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUseRole,
	removeUser,
};
