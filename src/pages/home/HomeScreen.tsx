import { Link } from "react-router-dom";
import "./HomeScreen.css";

export const HomeScreen = () => {
	return (
		<main className="Home-main Home-body animate__animated animate__fadeIn">
			<section>
				<p className="Home-main-text">Thank you for visiting my website!</p>
				<button className="Home-main-button">
					<Link className="button-text" to="/profile">
						See profile!
					</Link>
				</button>
			</section>
		</main>
	);
};
