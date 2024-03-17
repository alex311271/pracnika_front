import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from './index';

const RightAlined = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledLink = styled(Link)`
	display: flex;
	font-size: 1.125rem;
	width: 6rem;
	height: 2rem;
	border: 1px solid #000;
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	background-color: #eee;
`;

const StyledButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div className={className}>
			<RightAlined>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAlined>
			<RightAlined>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-arrow-circle-left" size="1.3rem" margin="1rem 1rem 0 0" />
				</StyledButton>

				<Link to="/post">
					<Icon id="fa-file-text-o" size="1.3rem" margin="1rem 0 0 0" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="1.3rem" margin=" 1rem 0 0 1rem " />
				</Link>
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
