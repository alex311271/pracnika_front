import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constants';
import { PostCard, Pagination } from './components';
import { getLastPageFromLinks } from './utils/get-last-page-from-links';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLinks(links));
			},
		);
	}, [requestServer, page]);

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

			{lastPage > 1 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
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
