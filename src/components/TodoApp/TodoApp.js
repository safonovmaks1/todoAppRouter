import { NavLink } from 'react-router-dom';
import {
	useRequestAddTodo,
	useRequestGetTodo,
	useRequestSortingTodo,
	useRequstSearchTodo,
} from '../../hooks';
import { Loader } from '../Loader/Loader';
import styles from './TodoApp.module.css';

export const TodoApp = () => {
	const { todos, setTodos, isLoading } = useRequestGetTodo();
	const { requestAddTodo, isCreating } = useRequestAddTodo(setTodos);

	const { searchingTodos, isSearching, setIsSearching } = useRequstSearchTodo(setTodos);
	const { isSorting, sortingTodos } = useRequestSortingTodo(setTodos);

	return (
		<>
			<h2 className={styles.title}>ToDo List</h2>
			<div className={styles.grid}>
				<div className={styles.flex}>
					<input
						type="text"
						value={isSearching}
						onChange={(e) => setIsSearching(e.target.value)}
						placeholder="Введите дело для поиска"
					/>

					<button
						type="button"
						disabled={!isSearching}
						onClick={searchingTodos}>
						Найти
					</button>
				</div>

				<div className={styles.flex}>
					<button type="button" disabled={isCreating} onClick={requestAddTodo}>
						Добавить
					</button>

					<button type="button" disabled={isSorting} onClick={sortingTodos}>
						Отсортировать по алфавиту
					</button>
				</div>

				<div>
					{isLoading ? (
						<Loader />
					) : (
						<ul className={styles.grid}>
							{todos.map(({ id, text }) => (
								<li key={id}>
									<NavLink
										to={`task/${id}`}
										className={styles.todoItem}>
										<span className={styles.slicedText}>{text}</span>
									</NavLink>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};
