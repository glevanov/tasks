import type { DragEvent } from 'react';

import { AddCard, CardsList } from '../../components';
import { BaseButton } from '../../ui';
import type { CardsEntry, Category } from '../../types/cards';
import { useHashLocation } from '../../helpers/router';
import { moveToCategory } from '../../store/cards/move-to-category';

import * as styles from './cards-group.module.css';

const formatCategory = (category: Category) => category[0].toUpperCase() + category.slice(1).toLowerCase();

const handleDragOver = (evt: DragEvent) => {
	evt.preventDefault();
	evt.stopPropagation();
	evt.dataTransfer.dropEffect = 'move';
};

const handleDrop = (evt: DragEvent, category: Category) => {
	evt.preventDefault();
	evt.stopPropagation();
	const id = evt.dataTransfer.getData('id');
	moveToCategory({ id, targetCategory: category });
};

interface Props {
	className?: string
	category: Category
	list: CardsEntry[]
}

export function CardsGroup({ category, list, className }: Props) {
	const [, setLocation] = useHashLocation();
	const addCard = () => setLocation(`/add/${category}`);

	return (
		<section
			className={className}
			onDragOver={handleDragOver}
			onDrop={(evt) => handleDrop(evt, category)}
		>
			<div className={styles.headingGroup}>
				<h2 className={styles.heading}>
					{formatCategory(category)}
				</h2>
				<BaseButton onClick={addCard}>
					Add
				</BaseButton>
			</div>

			{list.length ? <CardsList list={list} /> : <AddCard onClick={addCard}/>}
		</section>
	);
}
