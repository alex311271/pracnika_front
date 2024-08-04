import { deleteComment, getPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { getCommentsWithAuthor } from '../utils/get-comments-with-author';

export const removePostComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Недостаточно прав доступа',
			res: null,
		};
	}
	await deleteComment(id);
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
