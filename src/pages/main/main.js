import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PostCard } from './components/post-card/post-card';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const requestServer = useServerRequest();
	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res);
		});
	}, [requestServer]);

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, imageUrl, title, publishedAt, commentCount }) => (
					<PostCard
						key={id}
						id={id}
						imageUrl={imageUrl}
						title={title}
						publishedAt={publishedAt}
						commentCount={commentCount}
					/>
				))}
			</div>
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 40px 40px 20px 40px;
		justify-content: space-between;
	}
`;
