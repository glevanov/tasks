import classNames from 'classnames';
import { DragEvent } from 'react';

import { CardsEntry } from '../../types/cards';

import * as styles from './cards-list.module.css';

const onDragStart = (evt: DragEvent<HTMLElement>, id: string) => {
	evt.dataTransfer?.setData('id', id);
	evt.dataTransfer.dropEffect = 'copy';
};

interface Props {
	list: CardsEntry[]
}

export function CardsList({ list }: Props ) {
	return (
		<ul className={styles.list}>
			{list.map(({ id, text }, index) => (
				<li key={id}>
					<article
						className={classNames(styles.article, {
							[styles.first]: index === 0,
							[styles.last]: index === list.length - 1,
						})}
						draggable
						onDragStart={(evt) => onDragStart(evt, id)}
					>
						{text}
					</article>
				</li>
			))}
		</ul>
	);
}
