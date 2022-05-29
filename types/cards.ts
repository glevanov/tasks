export type Category = 'today' | 'tomorrow' | 'future';

export interface CardsEntry {
	id: string
	text: string
}

export type CardsData = Record<Category, CardsEntry[]>;
