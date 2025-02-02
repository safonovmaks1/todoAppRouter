import { TodoApp } from '../TodoApp/TodoApp';
import styles from './MainPage.module.css';

export const MainPage = () => {
	return (
		<>
			<div className={styles.app}>
				<TodoApp />
			</div>
		</>
	);
};
