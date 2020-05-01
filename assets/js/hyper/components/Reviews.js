import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="side-img">
							<img src="https://www.botswanayouth.com/wp-content/uploads/2018/01/cook.png" />
						</div>
					</div>
					<div class="col-md-4">
						<h5 class="comp-title">Reviews</h5>
						<h2>The Food Network</h2>
						<h4>"Best Resteraunt in Ohio"</h4>
						<p>
							I'm baby pork belly taxidermy intelligentsia iPhone actually
							butcher polaroid jean shorts freegan helvetica edison bulb. Yuccie
							craft beer cray cornhole authentic knausgaard heirloom drinking
							vinegar pug.
						</p>
						<div class="author">
							<strong>Berry White</strong> - <em>winner of the chef masters</em>
						</div>
						<div class="arrows">
							<i class="fas fa-long-arrow-alt-left"></i>
							<i class="fas fa-long-arrow-alt-right ready"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
