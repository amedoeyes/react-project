import { useEffect, useState } from "react";
import data from "../data.json";

function ProjectPanel(props: any) {
	const isVisible = {
		opacity: props.visible ? "1" : "0",
		visibility: props.visible ? "visible" : "hidden",
	} as React.CSSProperties;

	const handleClick = () => {
		props.setVisible(false);
	};

	return (
		<>
			<div className="dim" style={isVisible} onClick={handleClick}></div>
			<div className="projectPanel" style={isVisible}>
				<img alt="" src={props.img} />
				<h1>{props.name}</h1>
				<p>{props.description}</p>
			</div>
		</>
	);
}

function ProjectCard(props: any) {
	const handleClick = () => {
		props.setStateData({
			name: props.name,
			description: props.description,
			img: props.img,
		});
		props.setVisible(true);
	};

	return (
		<div className="projectCard" onClick={handleClick}>
			<img alt="" src={props.img} />
			<p>{props.name}</p>
		</div>
	);
}

export default function Projects() {
	const [visible, setVisible] = useState(false);

	const [stateData, setStateData] = useState({
		name: "",
		description: "",
		img: "",
	});

	const [headerHeight, setHeaderHeight] = useState(0);
	useEffect(() => {
		setHeaderHeight(document.querySelector("header").clientHeight - 1);
	}, []);

	return (
		<section
			style={{
				scrollMarginTop: headerHeight,
			}}
			className="projectsSection"
		>
			<h1>PROJECTS</h1>
			<ProjectPanel {...stateData} visible={visible} setVisible={setVisible} />
			<div className="projectCards">
				{data.map((data) => {
					return (
						<ProjectCard
							key={data.name}
							{...data}
							setStateData={setStateData}
							setVisible={setVisible}
						/>
					);
				})}
			</div>
		</section>
	);
}
