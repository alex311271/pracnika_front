import { setPostData } from './set-post-data';

export const saveEditAsync = (requestServer, editData) => (dispatch) =>
	requestServer('saveEdit', editData).then((editingPost) => {
		dispatch(setPostData(editingPost.res));
	});
