---
to: components/<%= name %>/<%= name %>.tsx
---
import * as styles from "./<%= name %>.module.css";

interface Props {

}

export function <%= h.changeCase.pascal(name) %>(props: Props) {
	return (
		<div>
		</div>
	)
}
