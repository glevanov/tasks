import { CardsData, CardsEntry, Category } from '../../types/cards';

export const getCardData = (state: CardsData, id: string) => {
	let category: Category | null = null;
	let card: CardsEntry | null = null;
	let index: number | null = null;

	for (const key in state) {
		index = state[key as Category].findIndex((card) => card.id === id);
		const data = state[key as Category][index];
		if (data !== undefined) {
			category = key as Category;
			card = data;
			break;
		}
	}

	return category !== null && card !== null && (index !== null && index > -1)
		? { category, card, index }
		: null;
};

export const deleteByIndex = <Type>(arr: Type[], index: number): Type[] => {
	return [
		...arr.slice(0, index),
		...arr.slice(index + 1),
	];
};

export const insertAfterIndex = <Type>(arr: Type[], index: number, entry: Type) => {
	return [
		...arr.slice(0, index + 1),
		entry,
		...arr.slice(index + 1),
	];
};

export const moveToAfterIndex = <Type extends { id: string }>(arr: Type[], targetIndex: number, entry: Type) => {
	const oldIndex = arr.findIndex((el) => el.id === entry.id);
	const copy = [...arr];

	copy.splice(oldIndex, 1);
	copy.splice(targetIndex + 1, 0, entry);

	return copy;
};
