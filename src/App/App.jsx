import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage, NotFound, TodoPage } from '../components';
import './App.module.css';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="task/:id" element={<TodoPage />} />

				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</>
	);
};
