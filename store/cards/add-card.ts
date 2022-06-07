import { nanoid } from 'nanoid';
import { action } from 'nanostores';

import { Category } from '../../types/cards';

import { cards } from './index';

export type AddCardPayload = { text: string; category: Category };

export const addCard = action(cards, 'addCard', (store, { text, category }: AddCardPayload) => {
	store.set({
		...store.get(),
		[category]: [...store.get()[category], {
			id: nanoid(),
			text,
		}],
	});
	return store.get();
});
