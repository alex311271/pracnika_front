import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((postList) => Promise.all([postList.json(), postList.headers.get('Link')]))
		.then(([postList, links]) => ({
			posts: postList && postList.map(transformPost),
			links,
		}));
