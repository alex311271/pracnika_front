import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constants';
import { PostCard, Pagination, Search } from './components';
import { getLastPageFromLinks, debounce } from './utils';

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);
	const [shouldSearch, setShouldSearch] = useState(false);
	const [searchPhrase, setSearchPhrase] = useState('');
	const requestServer = useServerRequest();

	useEffect(() => {
		requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then(
			({ res: { posts, links } }) => {
				setPosts(posts);
				setLastPage(getLastPageFromLinks(links));
			},
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestServer, page, shouldSearch]);

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1000), []);

	const onSearch = ({ target }) => {
		setSearchPhrase(target.value);
		startDelayedSearch(!shouldSearch);
	};

	return (
		<div className={className}>
			<div className="search-and-posts">
				<Search onChange={onSearch} searchPhrase={searchPhrase} />
				{posts.length ? (
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
				) : (
					<div className="no-post-found">Статьи не найдены</div>
				)}
			</div>
			{lastPage > 1 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
		</div>
	);
};

export const Main = styled(MainContainer)`
	& .search-and-posts {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 40px 40px 60px 40px;
		justify-content: space-around;
	}

	& .no-post-found {
		font-size: 24px;
		margin-top: 40px;
		text-align: center;
	}
`;
