import styled from 'styled-components';
import { Icon } from '../../../../components';

const PostPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" size="18px" margin="-1px 8px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<div onClick={()=>{}}>
					<Icon id=" fa-trash-o" size="20px" />
				</div>
			</div>
		</div>
	);
};

export const PostPanel = styled(PostPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${(margin)=>margin};
	font-size: 18px;

	& .published-at {
		display: flex;
	}

	& .buttons {
		display: flex;
	}
`;
