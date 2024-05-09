import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';

const PostPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/');
					});

					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" size="18px" margin="-1px 8px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id=" fa-trash-o" size="20px" onClick={() => onPostRemove(id)} />
			</div>
		</div>
	);
};

export const PostPanel = styled(PostPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${(margin) => margin};
	font-size: 18px;

	& .published-at {
		display: flex;
	}

	& .buttons {
		display: flex;
	}
`;
