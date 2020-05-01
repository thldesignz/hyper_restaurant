import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<div class="logo">
					<img src="../../../img/logo2.png" />
				</div>
				<nav class="menu">
					<a href="#OurStory">Our Story</a>
					<a href="#Reviews">Reviews</a>
					<a href="#SpecialMenu">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#Contact">Contact Us</a>
				</nav>
				<div class="social">
					<a href="#">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="#">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="#">
						<i class="fab fa-facebook"></i>
					</a>
					<a href="#">
						<i class="fab fa-google-plus-g"></i>
					</a>
				</div>
				<div class="copy">
					<p>
						&copy; 2020 Willies Steak House
						<br />
						Designed by Janae. All Rights Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
