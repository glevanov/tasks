import * as styles from "./cards-group.module.css";

import { CardsList } from "~/components";
import { CardsEntry, Category } from "~types/cards";

const formatCategory = (category: Category) => category[0].toUpperCase() + category.slice(1).toLowerCase()

interface Props {
	className?: string
	category: Category
	list: CardsEntry[]
}

export function CardsGroup({ category, list, className }: Props) {
	return (
		<section className={className}>
			<div className={styles.headingGroup}>
				<h2 className={styles.heading}>
					{formatCategory(category)}
				</h2>
				<button>+</button>
			</div>

			<CardsList list={list} />
		</section>
	)
}
