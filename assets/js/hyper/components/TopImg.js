import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section id="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome to the home of the best</h5>
					<h1>Prime Steak</h1>
				</div>
				<div class="contact-info">
					<div class="booking">Book Table Directly</div>
					<h2>(513) 555-1234</h2>
					<div class="hours">
						Opening Hours <strong>Mon - Fri </strong> 9am - 9pm
						<strong> Weekend </strong> 9am - 11pm
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
