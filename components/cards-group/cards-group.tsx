import * as styles from "./cards-group.module.css";

import { BaseButton, CardsList } from "../../components";
import { CardsEntry, Category } from "../../types/cards";
import {useHashLocation} from "../../helpers/router";

const formatCategory = (category: Category) => category[0].toUpperCase() + category.slice(1).toLowerCase();

interface Props {
	className?: string
	category: Category
	list: CardsEntry[]
}

export function CardsGroup({ category, list, className }: Props) {
	const [, setLocation] = useHashLocation();

	return (
		<section className={className}>
			<div className={styles.headingGroup}>
				<h2 className={styles.heading}>
					{formatCategory(category)}
				</h2>
				<BaseButton onClick={() => setLocation(`/add/${category}`)}>
					Add
				</BaseButton>
			</div>

			<CardsList list={list} />
		</section>
	);
}
