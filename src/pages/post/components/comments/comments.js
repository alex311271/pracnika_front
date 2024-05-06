import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Comment } from './components';
import { Icon } from '../../../../components';
import { selectUserId } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync } from '../../../../actions';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userId = useSelector(selectUserId);
	const requestServer = useServerRequest();

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Коментарий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<div onClick={() => onNewCommentAdd(userId, postId, newComment)}>
					<Icon
						id="fa-paper-plane-o"
						size="20px"
						margin="0 0 0 10px"
					/>
				</div>
			</div>
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 20px auto 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
	}

	& .new-comment textarea {
		padding: 10px;
		resize: none;
		width: 100%;
		height: 200px;
		font-size: 18px;
	}
`;
