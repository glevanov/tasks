import * as styles from './cards-list.module.css'
import { CardsEntry } from "~types/cards";

interface Props {
	list: CardsEntry[]
}

export function CardsList({ list }: Props ) {
	return (
		<ul className={styles.list}>
			{list.map((item) => (
				<li key={item}>
					<article
						className={styles.article}
					>
						{item}
					</article>
				</li>
			))}
		</ul>
	)
}
