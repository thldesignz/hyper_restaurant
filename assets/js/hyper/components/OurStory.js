import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>

						<h2>Cooking is the art of adjustment</h2>
						<p>
							I'm baby pork belly taxidermy intelligentsia iPhone actually
							butcher polaroid jean shorts freegan helvetica edison bulb. Yuccie
							craft beer cray cornhole authentic knausgaard heirloom drinking
							vinegar pug. Slow-carb kickstarter mixtape twee normcore subway
							tile, seitan bushwick prism synth tumeric. Tofu 90's quinoa, green
							juice activated charcoal butcher pok pok chicharrones try-hard
							pork belly you probably haven't heard of them.
						</p>
						<div class="quote">
							<i>"Love this best steak in a large town" </i>-
							<strong> Miyah Angelou</strong>
						</div>
						<a href="#" class="res-btn">
							Reserve
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
