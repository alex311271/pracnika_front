import { addComments, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { getCommentsWithAuthor } from '../utils';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Недостаточно прав доступа',
			res: null,
		};
	}
	await addComments(userId, postId, content);
	const post = await getPost(postId);
	const commentWithAuthor = await getCommentsWithAuthor(postId);

	return {
		error: null,
		res: {
			...post,
			comments: commentWithAuthor,
		},
	};
};
