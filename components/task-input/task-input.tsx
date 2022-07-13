import { useState } from 'react';

import type { Category } from '../../types/cards';
import { BaseSelect } from '../../ui';

import * as styles from './task-input.module.css';

interface CategoryOption {
	label: Category
	value: Category
}

const options: CategoryOption[] = [
	{
		label: 'today',
		value: 'today',
	},
	{
		label: 'tomorrow',
		value: 'tomorrow',
	},
	{
		label: 'future',
		value: 'future',
	},
];

interface Props {
	category: Category
	value: string
	whenChange: (value: string) => void
}

export function TaskInput({ category, value, whenChange }: Props) {
	const [selected, setSelect] = useState(category);

	return (
		<label className={styles.taskInput}>
			Add a task for
			<BaseSelect
				options={options}
				selected={selected}
				onChange={setSelect}
			/>

			<textarea
				className={styles.textarea}
				value={value}
				rows={7}
				onChange={(evt) => whenChange(evt.target.value)}
			/>
		</label>
	);
}
