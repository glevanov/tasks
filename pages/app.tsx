import { useStore } from "effector-react";

import "./app.css"
import * as styles from './app.module.css'

import { CardsGroup } from "~/components";
import { $cards } from "~store/cards";

export function App () {
	const { today, tomorrow, future } = useStore($cards)

	return (
		<div className={styles.app}>
			<h1 className={styles.heading}>Tasks</h1>

			<div className={styles.content}>
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
		</div>
	)
}
