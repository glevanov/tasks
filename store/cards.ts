import { createEvent, createStore } from "effector";

import { CardsData, Category } from "~/types/cards";

type AddCardPayload = { text: string; category: Category }
type DeleteCardPayload = { text: string; category: Category }

export const addCard = createEvent<AddCardPayload>()
const handleAddCard = (state: CardsData, { text, category}: AddCardPayload ): CardsData => ({
	...state,
	[category]: [...state[category], text],
})

export const deleteCard = createEvent<DeleteCardPayload>()
const handleDeleteCard = (state: CardsData, { text, category }: DeleteCardPayload): CardsData => ({
	...state,
	[category]: state[category].filter((item) => item !== text),
})

export const $cards = createStore<CardsData>({
	today: ['Feed the cat. The cat is hungry. And when it is hungry it is out for blood. Seriously, just feed the damn cat. Is it really this difficult? Go grab some food from the cupboard. The cat will not be grateful, yet you will live to see another day.', 'Call mom', 'Maybe update CV?'],
	tomorrow: ['Dentist at 09:30, Arbatskaya'],
	future: ['Visit Stockholm', 'Get some rest'],
})
	.on(addCard, handleAddCard)
	.on(deleteCard, handleDeleteCard)
