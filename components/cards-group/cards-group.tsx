import { DragEvent } from 'react';

import { BaseButton, CardsList } from '../../components';
import { CardsEntry, Category } from '../../types/cards';
import { useHashLocation } from '../../helpers/router';
import { moveCard } from '../../store/cards';

import * as styles from './cards-group.module.css';

const formatCategory = (category: Category) => category[0].toUpperCase() + category.slice(1).toLowerCase();

const onDragOver = (evt: DragEvent) => {
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'move';
};

const onDrop = (evt: DragEvent, category: Category) => {
	evt.preventDefault();
	const id = evt.dataTransfer.getData('id');
	moveCard({ id, target: category });
};

interface Props {
	className?: string
	category: Category
	list: CardsEntry[]
}

export function CardsGroup({ category, list, className }: Props) {
	const [, setLocation] = useHashLocation();

	return (
		<section
			className={className}
			onDragOver={onDragOver}
			onDrop={(evt) => onDrop(evt, category)}
		>
			<div className={styles.headingGroup}>
				<h2 className={styles.heading}>
					{formatCategory(category)}
				</h2>
				<BaseButton onClick={() => setLocation(`/add/${category}`)}>
					Add
				</BaseButton>
			</div>

			<CardsList list={list} />
		</section>
	);
}
