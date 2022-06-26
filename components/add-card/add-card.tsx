import * as styles from './add-card.module.css';
import plus from './plus.svg';

interface Props {
	onClick: () => void
}

const handleDragOver = (evt: React.DragEvent<HTMLElement>) => {
	evt.preventDefault();
	const target = evt.target as HTMLElement | undefined;
	target?.classList.add(styles.dragOver);
};

export function AddCard({ onClick }: Props) {
	return (
		<button
			className={styles.card}
			aria-label={'Add card'}
			onClick={onClick}
			onDragOver={handleDragOver}
		>
			<img
				width={70}
				height={70}
				src={plus}
				alt={''}
			/>
		</button>
	);
}
