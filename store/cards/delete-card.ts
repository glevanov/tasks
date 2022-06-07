import { action } from 'nanostores';

import { Category } from '../../types/cards';

import { cards } from './index';

export type DeleteCardPayload = { id: string; category: Category };

export const deleteCard = action(cards, 'deleteCard', (store, { category, id }: DeleteCardPayload) => {
	store.set({
		...store.get(),
		[category]: store.get()[category].filter((item) => item.id !== id),
	});
	return store.get();
});
