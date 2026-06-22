import { html } from "https://esm.sh/htm/react";

export function Greetings({name = 'Noname'}) {
    return html`
		<div>
			<h2>Hello ${name}</h2>
		</div>
	`
}