import "./app.css"
import * as styles from './app.module.css'

import { CardsGroup } from "~/components";
import { CardsData } from "~types/cards";

const mockData: CardsData = {
	today: ['Feed the cat', 'Call mom', 'Maybe update CV?'],
	tomorrow: [],
	later: [],
}

export function App () {
	return (
		<div className={styles.app}>
			<h1 className={styles.heading}>Tasks</h1>

			<CardsGroup
				className={styles.cardsGroup}
				category={'today'}
				list={mockData.today}
			/>
		</div>
	)
}
