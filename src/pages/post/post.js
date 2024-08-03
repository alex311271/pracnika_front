import styled from 'styled-components';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { PostContent, PostForm, Comments } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
	const post = useSelector(selectPost);
	const dispatch = useDispatch();
	const params = useParams();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const requestServer = useServerRequest();
	const [error, setError] = useState(null)

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}
		dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
			if(postData.error){
				setError(postData.error)
			}
		})
	}, [dispatch, requestServer, params.id, isCreating]);

	return ( error ? (<div>{error}</div>) :
		(<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>)
	);
};

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`;
