import { createEvent } from 'effector';

import type { CardsData, Category } from '../../types/cards';

import { deleteByIndex, getCardData } from './helpers';

export type MoveToCategoryPayload = { id: string; targetCategory: Category };
export const moveToCategory = createEvent<MoveToCategoryPayload>();

export const handleMoveToCategory = (state: CardsData, { id, targetCategory }: MoveToCategoryPayload): CardsData => {
	const currentData = getCardData(state, id);

	if (currentData === null) return state;

	const { category: oldCategory, card, index } = currentData;

	return {
		...state,
		[targetCategory]: [...state[targetCategory], card],
		[oldCategory]: deleteByIndex(state[oldCategory], index),
	};
};
