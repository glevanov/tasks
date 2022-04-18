import { Route, Router } from 'wouter';

import './global.css';
import { useHashLocation } from '../helpers/router';

import * as styles from './app.module.css';
import { Cards } from './cards/cards';
import { Add } from './add/add';

export function App () {
	return (
		<div className={styles.app}>
			<h1 className={styles.heading}>Tasks</h1>

			<div className={styles.content}>
				<Router hook={useHashLocation}>
					<Route path={'/'} component={Cards} />
					<Route path={'/add/:category'}>
						{(params) => <Add category={params.category} />}
					</Route>
				</Router>
			</div>
		</div>
	);
}
