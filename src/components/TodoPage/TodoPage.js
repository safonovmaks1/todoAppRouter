import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TODOS_URL } from '../../const';
import { useRequestDeleteTodo, useRequestUpdateTodo } from '../../hooks';
import styles from '../TodoApp/TodoApp.module.css';

export const TodoPage = () => {
	const [task, setTask] = useState({});
	const params = useParams();
	const navigate = useNavigate();
	const { deleteTodoItem, isDeleting } = useRequestDeleteTodo();
	const { updateTodoItem, isUpdating } = useRequestUpdateTodo();

	useEffect(() => {
		fetch(`${TODOS_URL}/${params.id}`)
			.then((rawResponse) => rawResponse.json())
			.then((prevTodos) => {
				setTask(prevTodos);
			});
	}, [isUpdating, isDeleting, params]);

	return (
		<>
			<div className={styles.app}>
				<h2 className={styles.title}>ToDo Task</h2>

				<div className={styles.header}>
					<ul>
						<li>
							<Link className={styles.link} to="/">
								Назад
							</Link>
						</li>
					</ul>

					<div className={styles.flex}>
						<button
							disabled={isUpdating}
							onClick={() => updateTodoItem(task.id)}>
							Edit
						</button>
						<button
							className={styles.deleteButton}
							disabled={isDeleting}
							onClick={() => {
								deleteTodoItem(task.id);
								navigate('/');
							}}>
							x
						</button>
					</div>
				</div>

				<div>
					<span className={styles.text}>{task.text}</span>
				</div>
			</div>
		</>
	);
};
