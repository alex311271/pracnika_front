import styled from "styled-components";

const ButtonContainer=({children, className, width, ...props})=>{
	return(
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	font-size: 1.125rem;
	width: ${({ width = '100%' }) => width};
	height: 2rem;
	border: 1px solid #000;
	border-radius: 0.5rem;
	justify-content: center;
	align-items: center;
	background-color: #eee;
	
	&:hover {
		cursor: pointer;
	}
`;