import "./Navbar.css";
import "../../../assets/font/flaticon.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<header>
			<section className="Navbar-icons-container">
				<div className="owner">
					<Link to="/">Francis Ferri</Link>
				</div>
				<div className="icons">
					<a
						target="_blank"
						href="https://www.linkedin.com/in/francis-ferri/"
						rel="noreferrer"
					>
						<span className="flaticon-010-linkedin"></span>
					</a>
					<a
						target="_blank"
						href="https://api.whatsapp.com/send?phone=593939368969"
						rel="noreferrer"
					>
						<span className="flaticon-003-whatsapp"></span>
					</a>
					<a
						target="_blank"
						href="https://twitter.com/ferri_francis"
						rel="noreferrer"
					>
						<span className="flaticon-002-twitter"></span>
					</a>
				</div>
			</section>
			<nav>
				<section className="nav-logo-container">
					<Link to="./">
						<img src="/assets/svg/home.svg" alt="Logo de mi blog" />
					</Link>
				</section>
				<section className="profile-link">
					<Link className="topic" to="/profile">
						Profile
					</Link>
					<Link className="topic" to="/knowledge">
						Knowledge
					</Link>
				</section>
			</nav>
		</header>
	);
};
