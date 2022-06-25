import type { Category } from '../../types/cards';

import * as styles from './task-input.module.css';

interface Props {
	category: Category
	value: string
	whenChange: (value: string) => void
}

export function TaskInput({ category, value, whenChange }: Props) {
	return (
		<label className={styles.taskInput}>
			Add a task for <span className={styles.category}>{category}</span>
			<textarea
				className={styles.textarea}
				value={value}
				rows={7}
				onChange={(evt) => whenChange(evt.target.value)}
			/>
		</label>
	);
}
