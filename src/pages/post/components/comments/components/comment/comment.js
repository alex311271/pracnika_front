import styled from 'styled-components';
import { Icon } from '../../../../../../components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon id="fa-user-circle-o" size="20px" margin="0 10px 0 10px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" size="18px" margin="0 10px 0 0px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<div>
				<Icon id="fa-trash-o" size="18px" margin="0 0 0 10px" />
			</div>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin: 10px 0 0 0;
	align-items: center;

	& .comment {
		border: 1px solid #000;
		padding: 5px 10px;
		width: 95%;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& .published-at {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
