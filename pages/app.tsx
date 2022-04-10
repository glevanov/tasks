import "./app.css"
import * as styles from './app.module.css'

import { CardsGroup } from "~/components";
import { CardsData } from "~types/cards";

const mockData: CardsData = {
	today: ['Feed the cat. The cat is hungry. And when it is hungry it is out for blood. Seriously, just feed the damn cat. Is it really this difficult? Go grab some food from the cupboard. The cat will not be grateful, yet you will live to see another day.', 'Call mom', 'Maybe update CV?'],
	tomorrow: ['Dentist at 09:30, Arbatskaya'],
	future: ['Visit Stockholm'],
}

export function App () {
	return (
		<div className={styles.app}>
			<h1 className={styles.heading}>Tasks</h1>

			<div className={styles.content}>
				<CardsGroup
					className={styles.cardsGroup}
					category={'today'}
					list={mockData.today}
				/>

				<CardsGroup
					className={styles.cardsGroup}
					category={'tomorrow'}
					list={mockData.tomorrow}
				/>

				<CardsGroup
					className={styles.cardsGroup}
					category={'future'}
					list={mockData.future}
				/>
			</div>
		</div>
	)
}
