import * as styles from './base-select.module.css';

type AllowedValue = string | number;

interface Option<Value extends AllowedValue> {
	label: string
	value: Value
}

interface Props<Value extends AllowedValue> {
	label?: string
	options: Option<Value>[]
	placeholder?: string
	selected: Value
	onChange: (selected: Value) => void
}

export function BaseSelect<Value extends AllowedValue>(props: Props<Value>) {
	return (
		<label>
			{props.label || null}
			<select
				value={props.selected}
				onChange={props.onChange}
			>
				{props.placeholder !== undefined && <option value={''}>{props.placeholder}</option>}
				{props.options.map((option) => (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</label>
	);
}
