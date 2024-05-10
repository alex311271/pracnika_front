import { transformPost } from '../transformers';

export const getPosts = () =>
	fetch('http://localhost:3005/posts')
		.then((postList) => postList.json())
		.then((postList) => postList && postList.map(transformPost));
