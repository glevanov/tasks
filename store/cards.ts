import { createEvent, createStore } from 'effector';

import { CardsData, Category } from '../types/cards';

type AddCardPayload = { text: string; category: Category };
type DeleteCardPayload = { text: string; category: Category };

export const addCard = createEvent<AddCardPayload>();
const handleAddCard = (state: CardsData, { text, category }: AddCardPayload ): CardsData => ({
	...state,
	[category]: [...state[category], text],
});

export const deleteCard = createEvent<DeleteCardPayload>();
const handleDeleteCard = (state: CardsData, { text, category }: DeleteCardPayload): CardsData => ({
	...state,
	[category]: state[category].filter((item) => item !== text),
});

export const $cards = createStore<CardsData>({
	today: ['Feed the cat. Let the bowl overflow with food just as this card text does. The cat is hungry, and a hungry cat is never a happy cat.', 'Call mom', 'Maybe update CV?'],
	tomorrow: ['Dentist at 09:30, Arbatskaya'],
	future: ['Visit Stockholm', 'Get some rest'],
})
	.on(addCard, handleAddCard)
	.on(deleteCard, handleDeleteCard);
