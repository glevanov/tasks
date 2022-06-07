import { nanoid } from 'nanoid';
import { atom } from 'nanostores';

import { CardsData } from '../../types/cards';

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

export const cards = atom<CardsData>(mockState);
