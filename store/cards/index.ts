import { nanoid } from 'nanoid';
import { createStore } from 'effector';

import type { CardsData } from '../../types/cards';

import { addCard, handleAddCard } from './add-card';
import { moveToCategory, handleMoveToCategory } from './move-to-category';
import { moveToCard, handleMoveToCard } from './move-to-card';

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
	.on(moveToCard, handleMoveToCard)
	.on(moveToCategory, handleMoveToCategory);
