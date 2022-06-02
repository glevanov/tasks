import classNames from 'classnames';

import { CardsEntry } from '../../types/cards';

import * as styles from './task-card.module.css';

interface Props {
	card: CardsEntry
	className?: string
}

const handleDragOver = (evt: React.DragEvent<HTMLElement>) => {
	evt.preventDefault();
	// ставим стили на ховер карточкой - подсветка на который вставляем задачу
	const target = evt.target as HTMLElement | undefined;
	target?.classList.add(styles.dragOver);
};

const handleDragLeave = (evt: React.DragEvent<HTMLElement>) => {
	// очищаем стили на ховер карточкой
	const target = evt.target as HTMLElement | undefined;
	target?.classList.remove(styles.dragOver);
};

const handleDragEnd = (evt: React.DragEvent<HTMLElement>) => {
	// очищаем стили здесь тоже зачем-то (???)
	const target = evt.target as HTMLElement | undefined;
	target?.classList.remove(styles.dragOver);
};

const handleDragStart = (evt: React.DragEvent<HTMLElement>, id: string) => {
	// сохраняем здесь текущую доску и задачу
	evt.dataTransfer?.setData('id', id);
	evt.dataTransfer.dropEffect = 'copy';
};

const handleDrop = (evt: React.DragEvent<HTMLElement>, card: CardsEntry, id: string) => {
	evt.preventDefault();
	// удаляем в старом месте и вставляем в новом
};

export function TaskCard({ card, className }: Props) {
	const { id, text } = card;

	return (
		<article
			className={classNames(styles.article, className)}
			draggable
			onDragOver={(evt) => handleDragOver(evt)}
			onDragLeave={(evt) => handleDragLeave(evt)}
			onDragStart={(evt) => handleDragStart(evt, id)}
			onDragEnd={(evt) => handleDragEnd(evt)}
			onDrop={(evt) => handleDrop(evt, card, id)}
		>
			{text}
		</article>
	);
}
