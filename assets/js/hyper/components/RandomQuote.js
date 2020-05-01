import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section id="RandomQuote">
			<div class="container">
				<h1>
					"I don't like gourmet cooking or this cooking or that cooking. I like
					good cooking."
				</h1>
				<span class="author">- James Beard -</span>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
