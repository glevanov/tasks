import classNames from "classnames";

import * as styles from './cards-list.module.css'
import { CardsEntry } from "../../types/cards";

interface Props {
	list: CardsEntry[]
}

export function CardsList({ list }: Props ) {
	return (
		<ul className={styles.list}>
			{list.map((item, index) => (
				<li key={item}>
					<article
						className={classNames(styles.article, {
							[styles.first]: index === 0,
							[styles.last]: index === list.length - 1
						})}
					>
						{item}
					</article>
				</li>
			))}
		</ul>
	)
}
