import "./app.css"
import * as styles from './app.module.css'

import { CardsGroup } from "~/components";
import { CardsData } from "~types/cards";

const mockData: CardsData = {
	today: ['Feed the cat. The cat is hungry. And when it is hungry it is out for blood. Seriously, just feed the damn cat. Is it really this difficult? Go grab some food from the cupboard. The cat will not be grateful, yet you will live to see another day.', 'Call mom', 'Maybe update CV?'],
	tomorrow: [],
	later: [],
}

export function App () {
	return (
		<div className={styles.app}>
			<h1 className={styles.heading}>Tasks</h1>

			<div className={styles.content}>
				<CardsGroup
					category={'today'}
					list={mockData.today}
				/>
			</div>
		</div>
	)
}
