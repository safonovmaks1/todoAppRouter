import { useState } from 'react';
import { TODOS_URL } from '../const';

export const useRequestUpdateTodo = (setTodos) => {
	const [isUpdating, setIsUpdating] = useState(false);

	const updateTodoItem = (id) => {
		setIsUpdating(true);
		const newText = prompt('Add new Todo!');

		if (!newText) {
			setIsUpdating(false);
			return;
		}

		fetch(`${TODOS_URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ text: newText }),
		})
			.then((rawResponse) => rawResponse.json())
			.then((updatedTodos) => {
				setTodos((prevTodos) =>
					prevTodos.map((todo) =>
						todo.id === updatedTodos.id ? updatedTodos : todo,
					),
				);
			})
			.catch((error) => {
				console.error('Ошибка при обновлении задачи:', error);
			})
			.finally(() => setIsUpdating(false));
	};
	return { updateTodoItem, isUpdating };
};
