import classNames from 'classnames';

import { CardsEntry } from '../../types/cards';
import { TaskCard } from '../task-card/task-card';

import * as styles from './cards-list.module.css';

interface Props {
	list: CardsEntry[]
}

export function CardsList({ list }: Props ) {
	return (
		<ul className={styles.list}>
			{list.map((card, index) => (
				<li key={card.id}>
					<TaskCard
						className={classNames({
							[styles.first]: index === 0,
							[styles.last]: index === list.length - 1,
						})}
						card={card}
					/>
				</li>
			))}
		</ul>
	);
}
