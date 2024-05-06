import styled from 'styled-components';
import { H2, Icon } from '../../../../components';
import { PostPanel } from '../post-panel/post-panel';
import { useNavigate } from 'react-router-dom';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<PostPanel
				publishedAt={publishedAt}
				margin="-20px 0 20px"
				editButton={
					<div onClick={() => navigate(`/post/${id}/edit`)}>
						<Icon id="fa-pencil-square-o" size="20px" margin="0 10px 0 0" />
					</div>
				}
			/>

			<div className="post-text">{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 0 0;
	}

	& .post-text {
		white-space: pre-line;
		font-size: 18px;
	}
`;
