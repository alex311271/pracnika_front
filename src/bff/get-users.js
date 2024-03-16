export const getUsers =() => fetch('http://localhost:3003/users').then((usersList) =>
	usersList.json(),
);
