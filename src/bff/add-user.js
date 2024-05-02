import { generateDate } from "./generate-date";

export const addUser = (login, password) =>
	fetch('localhost:3003/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			register_at: generateDate(),
			role_id: 2,
		}),
	});
