import { transformUser } from '../transformers';

export const getUsers = () =>
	fetch('http://localhost:3005/users')
		.then((usersList) => usersList.json())
		.then((userList) => userList && userList.map(transformUser));
