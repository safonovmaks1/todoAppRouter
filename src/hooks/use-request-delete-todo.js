import { useState } from 'react';
import { TODOS_URL } from '../const';

export const useRequestDeleteTodo = (setTodos) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const deleteTodoItem = (id) => {
		setIsDeleting(true);

		fetch(`${TODOS_URL}/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then(() => {
				setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
			})
			.catch((error) => {
				console.error('Ошибка при удалении задачи:', error);
			})
			.finally(() => setIsDeleting(false));
	};

	return { deleteTodoItem, isDeleting };
};
