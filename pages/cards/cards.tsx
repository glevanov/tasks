import { useStore } from "effector-react";

import * as styles from './cards.module.css'

import { CardsGroup } from "../../components";
import { $cards } from "../../store/cards";

export function Cards () {
	const { today, tomorrow, future } = useStore($cards)

	return (
		<div className={styles.cards}>
			<CardsGroup
				className={styles.cardsGroup}
				category={'today'}
				list={today}
			/>

			<CardsGroup
				className={styles.cardsGroup}
				category={'tomorrow'}
				list={tomorrow}
			/>

			<CardsGroup
				className={styles.cardsGroup}
				category={'future'}
				list={future}
			/>
		</div>
	)
}
