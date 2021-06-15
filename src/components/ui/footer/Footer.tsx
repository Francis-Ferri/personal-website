import "./Footer.css";

export const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer>
			<p>Francis Ferri &copy; {year} </p>
			<div className="flaticon">
				Icons made by{" "}
				<a
					href="https://www.flaticon.com/authors/prettycons"
					title="prettycons"
				>
					prettycons{" "}
				</a>
				from{" "}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>
			</div>
		</footer>
	);
};
