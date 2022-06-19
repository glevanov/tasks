import { createEvent } from 'effector';

import { CardsData } from '../../types/cards';

import { deleteByIndex, getCardData, insertAfterIndex, moveToAfterIndex } from './helpers';

export type MoveToCardPayload = { id: string; targetId: string };
export const moveToCard = createEvent<MoveToCardPayload>();

export const handleMoveToCard = (state: CardsData, { id, targetId }: MoveToCardPayload): CardsData => {
	const currentData = getCardData(state, id);
	const targetData = getCardData(state, targetId);

	if (currentData === null || targetData === null) return state;

	const { category: oldCategory, card: currentCard, index: currentIndex } = currentData;
	const { category: targetCategory, index: targetIndex } = targetData;

	if (oldCategory !== targetCategory) {
		return {
			...state,
			[targetCategory]: insertAfterIndex(state[targetCategory], targetIndex, currentCard),
			[oldCategory]: deleteByIndex(state[oldCategory], currentIndex),
		};

	}

	return {
		...state,
		[oldCategory]: moveToAfterIndex(state[oldCategory], targetIndex, currentCard),
	};
};
