import { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

import * as styles from './base-button.module.css';

interface Props {
	children?: ReactNode
	className?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
}

export function BaseButton({ children, className, onClick, disabled }: Props) {
	return (
		<button
			className={classNames(styles.button, className)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
