import classNames from 'classnames';

import { CardsEntry } from '../../types/cards';
import { moveToCard } from '../../store/cards/move-to-card';

import * as styles from './task-card.module.css';

interface Props {
	card: CardsEntry
	className?: string
}

const handleDragOver = (evt: React.DragEvent<HTMLElement>, card: CardsEntry) => {
	evt.preventDefault();
	evt.dataTransfer.dropEffect = 'move';
	const target = evt.target as HTMLElement | undefined;
	const targetId = evt.dataTransfer?.getData('id');
	if (card.id === targetId) return;
	target?.classList.add(styles.dragOver);
};

const clearDragOverStyles = (evt: React.DragEvent<HTMLElement>) => {
	const target = evt.target as HTMLElement | undefined;
	target?.classList.remove(styles.dragOver);
};

const handleDragStart = (evt: React.DragEvent<HTMLElement>, id: string) => {
	evt.dataTransfer?.setData('id', id);
	evt.dataTransfer.dropEffect = 'copy';
};

const handleDrop = (evt: React.DragEvent<HTMLElement>, card: CardsEntry, id: string) => {
	evt.preventDefault();
	const draggedId = evt.dataTransfer.getData('id');
	moveToCard({
		id: draggedId,
		targetId: id,
	});
};

export function TaskCard({ card, className }: Props) {
	const { id, text } = card;

	return (
		<article
			className={classNames(styles.article, className)}
			draggable
			onDragOver={(evt) => handleDragOver(evt, card)}
			onDragLeave={clearDragOverStyles}
			onDragStart={(evt) => handleDragStart(evt, id)}
			onDragEnd={clearDragOverStyles}
			onDrop={(evt) => handleDrop(evt, card, id)}
		>
			{text}
		</article>
	);
}
