import { useEffect, useState } from "react";
import data from "../data.json";

export default function Projects() {
	const [visible, setVisible] = useState({ display: false, opacity: false });
	function ProjectPanel(props: any) {
		const isVisible = {
			display: visible.display ? "flex" : "",
			opacity: visible.opacity ? "1" : "",
		};

		const handleClick = () => {
			setVisible({ display: true, opacity: false });
			setTimeout(() => {
				setVisible({ display: false, opacity: false });
			}, 250);
		};

		return (
			<>
				<div className="dim" style={isVisible} onClick={handleClick}></div>
				<div className="projectPanel" style={isVisible}>
					<img src={props.img} />
					<h1>{props.name}</h1>
					<p>{props.description}</p>
				</div>
			</>
		);
	}

	const [stateData, setStateData] = useState({
		name: "",
		description: "",
		img: "",
	});

	function ProjectCard(props: any) {
		const handleClick = () => {
			setStateData({
				name: props.name,
				description: props.description,
				img: props.img,
			});
			setVisible({ display: true, opacity: false });
			setTimeout(() => {
				setVisible({ display: true, opacity: true });
			}, 10);
		};

		return (
			<div className="projectCard" onClick={handleClick}>
				<img src={props.img} />
				<p>{props.name}</p>
			</div>
		);
	}
	const [headerHeight, setHeaderHeight] = useState(0);
	useEffect(() => {
		setHeaderHeight(document.querySelector("header").clientHeight - 1);
	});

	return (
		<section
			style={{
				scrollMarginTop: headerHeight,
			}}
			className="projectsScetion"
		>
			<h1>PROJECTS</h1>
			{ProjectPanel({ ...stateData })}
			<div className="projectCards">
				{data.map((data) => {
					return <ProjectCard {...data} />;
				})}
			</div>
		</section>
	);
}
