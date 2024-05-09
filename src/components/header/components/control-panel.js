import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from './index';
import { Button } from '../../button/button';
import { ROLE } from '../../../constants';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../selectors';
import { logout } from '../../../actions/logout';

const RightAlined = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin: 0 16px 0 0px;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={className}>
			<RightAlined>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<Icon
							id="fa fa-sign-out"
							size="1.3rem"
							margin="2.5px 0 2.5px 0"
							onClick={onLogout}
						/>
					</>
				)}
			</RightAlined>
			<RightAlined>
				<Icon
					id="fa fa-backward"
					size="1.3rem"
					margin="1rem 1rem 0 0"
					onClick={() => navigate(-1)}
				/>

				<Link to="/post">
					<Icon
						id="fa-file-text-o"
						size="1.3rem"
						margin="1rem 0 0 0"
						onClick={() => {}}
					/>
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="1.3rem" margin=" 1rem 0 0 1rem " onClick={() => {}} />
				</Link>
			</RightAlined>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
