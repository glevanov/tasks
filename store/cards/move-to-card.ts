import { action } from 'nanostores';

import { deleteByIndex, getCardData, insertAfterIndex, moveToAfterIndex } from './helpers';

import { cards } from './index';

export type MoveToCardPayload = { id: string; targetId: string };

export const moveToCard = action(cards, 'moveToCard', (store, { id, targetId }: MoveToCardPayload) => {
	const currentData = getCardData(store.get(), id);
	const targetData = getCardData(store.get(), targetId);

	if (currentData === null || targetData === null) return store.get();

	const { category: oldCategory, card: currentCard, index: currentIndex } = currentData;
	const { category: targetCategory, index: targetIndex } = targetData;

	if (oldCategory !== targetCategory) {
		store.set({
			...store.get(),
			[targetCategory]: insertAfterIndex(store.get()[targetCategory], targetIndex, currentCard),
			[oldCategory]: deleteByIndex(store.get()[oldCategory], currentIndex),
		});

	} else {
		store.set({
			...store.get(),
			[oldCategory]: moveToAfterIndex(store.get()[oldCategory], targetIndex, currentCard),
		});
	}

	console.log(JSON.stringify(store.get(), null, 2))

	return store.get();
});
