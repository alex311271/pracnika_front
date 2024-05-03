export const getRoles = () =>
	fetch('http://localhost:3005/roles').then((rolesList) => rolesList.json());
