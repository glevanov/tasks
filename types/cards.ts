export type Category = 'today' | 'tomorrow' | 'later'

export type CardsEntry = string

export type CardsData = Record<Category, CardsEntry[]>
