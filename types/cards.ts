export type Category = 'today' | 'tomorrow' | 'future'

export type CardsEntry = string

export type CardsData = Record<Category, CardsEntry[]>
