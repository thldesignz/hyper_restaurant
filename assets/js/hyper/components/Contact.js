import { h, app } from 'hyperapp';

export default function Contact({ state, actions }) {
	return (
		<section id="Contact">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
				<h2>Willies Steak House</h2>

				<div class="box">
					<div class="row">
						<div class="col-md-6">
							<div class="title">West Chester, Ohio </div>
							<h6 class="address">
								7309 Kingsgate Way, <br></br>
								West Chester Township, OH 45069
							</h6>
							<p>
								<strong>email: </strong>
								<a href="mailto:Info@williessteakgouse.com">
									Info@williessteakgouse.com
								</a>
							</p>
						</div>

						<div class="col-md-6">
							<h6>Phone:</h6>
							<div class="title">(513) 555-1234</div>
							<h6>Lunch Special:</h6>
							<p>
								friday, saturday & sunday <br></br>
								from 12pm - 1:30pm
							</p>
							<h6>Dinner Special:</h6>
							<p>
								Daily <br></br>
								from 6pm - 9pm
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
