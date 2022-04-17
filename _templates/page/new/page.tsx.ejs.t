---
to: pages/<%= name %>/<%= name %>.tsx
---
import * as styles from "./<%= name %>.module.css";

export function <%= h.changeCase.pascal(name) %>() {
	return (
		<div>
		</div>
	)
}
