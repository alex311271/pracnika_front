import { transformPost } from '../transformers';

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`)
		.then((postList) => {
			return Promise.all([postList.json(), postList.headers.get('Link')]);
		})
		.then(([postList, links]) => ({
			posts: postList && postList.map(transformPost),
			links,
		}));
