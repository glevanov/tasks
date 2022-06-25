import { nanoid } from 'nanoid';
import { createEvent } from 'effector';

import type { CardsData, Category } from '../../types/cards';

export type AddCardPayload = { text: string; category: Category };
export const addCard = createEvent<AddCardPayload>();

export const handleAddCard = (state: CardsData, { text, category }: AddCardPayload ): CardsData => ({
	...state,
	[category]: [...state[category], {
		id: nanoid(),
		text,
	}],
});
