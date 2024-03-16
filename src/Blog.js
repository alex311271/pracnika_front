import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px;
`;

const H2 = styled.h2`
	text-aliang: center;
`;
const Header = () => <div>Шапка</div>;
const Footer = () => <div>Футер</div>;

export const Blog = () => {
	return (
		<>
		<Header/>
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path="/" element={<div>Главная секаница</div>}/>
					<Route path="/login" element={<div>Авторизация</div>}/>
					<Route path="/register" element={<div>Регистрация</div>}/>
					<Route path="/users" element={<div>Пользователи</div>}/>
					<Route path="/post/id" element={<div>Новая статья</div>}/>
					<Route path="/post" element={<div>Новая статья</div>}/>
					<Route path="/" element={<div>Ошибка</div>}/>
				</Routes>
			</Content>
		<Footer/>
		</>
	);
};
