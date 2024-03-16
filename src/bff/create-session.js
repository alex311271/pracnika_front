import { removeComment } from "./session/remove-comment";
import { ROLE } from '../constans';

export const createSession = (roleId) => {
	const session = {
	logout() {
				Object.keys(session).forEach((key) => {
					delete session[key];
				});
			}
		}

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}

		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}

		case ROLE.READER: {
			
			break;
		}

		default:
	}
	return session
}