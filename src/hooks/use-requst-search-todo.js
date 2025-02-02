import { useState } from 'react';

export const useRequstSearchTodo = (setTodos) => {
	const [isSearching, setIsSearching] = useState('');

	const searchingTodos = () => {
		setTodos((searchedTodos) =>
			searchedTodos.filter((todo) => todo.text.includes(isSearching)),
		);
		setIsSearching('');
	};

	return { searchingTodos, isSearching, setIsSearching };
};
