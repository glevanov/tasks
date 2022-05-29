import { createEvent, createStore } from 'effector';
import { nanoid } from 'nanoid';

import { CardsData, CardsEntry, Category } from '../types/cards';

type AddCardPayload = { text: string; category: Category };
type DeleteCardPayload = { id: string; category: Category };
type MoveCardPayload = { id: string; target: Category };

export const addCard = createEvent<AddCardPayload>();
const handleAddCard = (state: CardsData, { text, category }: AddCardPayload ): CardsData => ({
	...state,
	[category]: [...state[category], {
		id: nanoid(),
		text,
	}],
});

export const deleteCard = createEvent<DeleteCardPayload>();
const handleDeleteCard = (state: CardsData, { category, id }: DeleteCardPayload): CardsData => ({
	...state,
	[category]: state[category].filter((item) => item.id !== id),
});

export const moveCard = createEvent<MoveCardPayload>();
const handleMoveCard = (state: CardsData, { id, target }: MoveCardPayload): CardsData => {
	let oldCategory: Category | null = null;
	let card: CardsEntry | null = null;

	for (const key in state) {
		const data = state[key as Category].find((card) => card.id === id);
		if (data !== undefined) {
			oldCategory = key as Category;
			card = data;
			break;
		}
	}

	if (oldCategory === target || oldCategory === null || card === null) return state;

	return {
		...state,
		[target]: [...state[target], card],
		[oldCategory]: state[oldCategory].filter((item) => item.id !== id),
	};
};

const mockState: CardsData = {
	today: [
		{ id: nanoid(), text: 'Feed the cat. Let the bowl overflow with food just as this card text does. The cat is hungry, and a hungry cat is never a happy cat.' },
		{ id: nanoid(), text: 'Call mom' },
		{ id: nanoid(), text: 'Maybe update CV?' },
	],
	tomorrow: [
		{ id: nanoid(), text: 'Dentist at 09:30, Arbatskaya' },
	],
	future: [
		{ id: nanoid(), text: 'Visit Stockholm' },
		{ id: nanoid(), text: 'Get some rest' },
	],
};

export const $cards = createStore<CardsData>(mockState)
	.on(addCard, handleAddCard)
	.on(deleteCard, handleDeleteCard)
	.on(moveCard, handleMoveCard);
