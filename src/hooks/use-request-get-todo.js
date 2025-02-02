import { useEffect, useState } from 'react';
import { TODOS_URL } from '../const';

export const useRequestGetTodo = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(TODOS_URL)
			.then((rawResponse) => rawResponse.json())
			.then((data) => {
				setTodos(data);
			})
			.catch((error) => {
				console.error('Ошибка при загрузке данных:', error);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return { todos, setTodos, isLoading };
};
