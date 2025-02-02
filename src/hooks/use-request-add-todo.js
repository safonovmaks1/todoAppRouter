import { useState } from 'react';
import { TODOS_URL } from '../const';

export const useRequestAddTodo = (setTodos) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = () => {
		setIsCreating(true);
		const text = prompt('Add Todo!');

		if (!text) {
			setIsCreating(false);
			return;
		}

		fetch(TODOS_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				id: Date.now().toString(),
				text: text,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((newTodo) => {
				setTodos((prevTodos) => [...prevTodos, newTodo]);
			})
			.catch((error) => {
				console.error('Ошибка при добавлении задачи:', error);
			})
			.finally(() => setIsCreating(false));
	};
	return { requestAddTodo, isCreating };
};
