import { editPost, addPost } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const saveEdit = async (hash, editData) => {
	const accessRoles = [ROLE.ADMIN];
	const access = await sessions.access(hash, accessRoles);
	if (!access) {
		return {
			error: 'Недостаточно прав доступа',
			res: null,
		};
	}
	const savePost =
		editData.id === '' ? await addPost(editData) : await editPost(editData);
	return {
		error: null,
		res: savePost,
	};
};
