import { useState } from "react";

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const changeBackground = () => {
		const homeHeight =
			document.querySelector(".homeSection").clientHeight -
			document.querySelector("header").clientHeight;
		if (window.scrollY > homeHeight) {
			setScrolled(true);
		} else if (window.scrollY < homeHeight) {
			setScrolled(false);
		}
	};
	window.addEventListener("scroll", changeBackground);

	const scrollIntoView = (e) => {
		return document.querySelector(e).scrollIntoView({ behavior: "smooth" });
	};
	return (
		<header
			style={{
				backgroundColor: scrolled ? "#101010" : "",
				boxShadow: scrolled ? "0px 0px 10px black" : "",
			}}
		>
			<nav style={{ opacity: scrolled ? "1" : "" }}>
				<ul>
					<li
						onClick={() => {
							scrollIntoView(".projectsSection");
						}}
					>
						PROJECTS
					</li>
					<h1
						onClick={() => {
							scrollIntoView(".homeSection");
						}}
					>
						{"<O>"}
					</h1>
					<li>CONTACT</li>
				</ul>
			</nav>
		</header>
	);
}
