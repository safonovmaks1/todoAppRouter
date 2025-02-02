import { useState } from 'react';

export const useRequestSortingTodo = (setTodos) => {
	const [isSorting, setIsSorting] = useState(false);

	const sortingTodos = () => {
		setTodos((sortedTodos) =>
			[...sortedTodos].sort((a, b) => a.text.localeCompare(b.text)),
		);
		setIsSorting(true);
		setIsSorting(false);
	};

	return { isSorting, sortingTodos };
};
