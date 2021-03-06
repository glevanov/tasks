import { useState } from 'react';

import type { Category } from '../../types/cards';
import { TaskInput } from '../../components';
import { BaseButton } from '../../ui';
import { addCard } from '../../store/cards/add-card';
import { useHashLocation } from '../../helpers/router';

import * as styles from './add.module.css';

const validateCategoryFromUrl = (category: string): Category => {
	switch (category) {
		case 'today':
			return 'today';
		case 'tomorrow':
			return 'tomorrow';
		case 'future':
			return 'future';
		default:
			return 'tomorrow';
	}
};

interface Props {
	category: string
}

export function Add({ category }: Props) {
	const validatedCategory = validateCategoryFromUrl(category);
	const [text, setText] = useState('');
	const [, setLocation] = useHashLocation();

	const onAdd = () => {
		addCard({
			category: validatedCategory,
			text,
		});
		setLocation('/');
	};

	return (
		<div className={styles.add}>
			<TaskInput
				category={validatedCategory}
				value={text}
				whenChange={setText}
			/>

			<div className={styles.buttons}>
				<BaseButton
					onClick={() => setLocation('/')}
				>
					Cancel
				</BaseButton>

				<BaseButton
					onClick={onAdd}
					disabled={text.trim().length === 0}
				>
					Add
				</BaseButton>
			</div>
		</div>
	);
}
