import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from './index';

const LogoTextLarge = styled.div`
	font-size: 2rem;
	font-weight: bold;
`;

const LogoTextSmall = styled.div`
	font-size: 1.125rem;
	font-weight: bold;
`;

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-camera-retro" size="5rem" margin="0.5rem" />
		<div>
			<LogoTextLarge>Мой блог</LogoTextLarge>
			<LogoTextSmall>Картинки и заметки</LogoTextSmall>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)`
	align-items: center;
	margin-top: -0.6rem;
`;
