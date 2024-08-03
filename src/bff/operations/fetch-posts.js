import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (searchPhrase, page, limit) => {
	const [{ posts, links }, comments] = await Promise.all([
		getPosts(searchPhrase, page, limit),
		getComments(),
	]);
	console.log(links)
	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentCount: getCommentsCount(comments, post.id),
			})),
			links,
		},
	};
};
