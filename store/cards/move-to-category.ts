import { action } from 'nanostores';

import { Category } from '../../types/cards';

import { deleteByIndex, getCardData } from './helpers';

import { cards } from './index';

export type MoveToCategoryPayload = { id: string; targetCategory: Category };

export const moveToCategory = action(cards, 'moveToCategory', (store, { id, targetCategory }: MoveToCategoryPayload) => {
	const currentData = getCardData(store.get(), id);

	if (currentData === null) return store.get();

	const { category: oldCategory, card, index } = currentData;

	store.set({
		...store.get(),
		[targetCategory]: [...store.get()[targetCategory], card],
		[oldCategory]: deleteByIndex(store.get()[oldCategory], index),
	});
	return store.get();
});
