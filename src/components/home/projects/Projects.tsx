import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import dragobyte from "./project-imgs/dragobyte.png";
import pandora from "./project-imgs/pandora.png";

export const Projects = () => {
	return (
		<section className="section-wrapper" id="projects">
			<SectionHeader title="Projects" dir="r" />

			<div className={styles.projects}>
				{projects.map((project) => {
					return <Project key={project.title} {...project} />;
				})}
			</div>
		</section>
	);
};

const projects = [
	{
		title: "Pandora",
		imgSrc: pandora,
		code: "https://github.com/Flepsz/Pandora",
		projectLink: "pandorabank.vercel.app",
		tech: ["React", "React Native", "NextJS", "Python", "Django Rest"],
		description:
			"Pandora, a digital banking solution equipped with a mobile app and a dedicated landing page for effective promotion.",
		modalContent: [
			"The Senai project showcases my full-stack capabilities, where I single-handedly developed the entire application.",
			"On the mobile front, the frontend is powered by React Native, complemented by a Django Rest API backend.",
			"Additionally, there'apos;s a dedicated homepage for promotional purposes.",
		],
	},
	{
		title: "DragoByte",
		imgSrc: dragobyte,
		code: "https://github.com/Flepsz/DragoByte",
		projectLink: "https://dragobyte.vercel.app/",
		tech: ["React", "ViteJS", "Javascript"],
		description:
			"My inaugural experience with React.js: Building an e-commerce platform for computer enthusiasts.",
		modalContent: [
			"Project developed at SENAI as an evaluation.",
			"The tech stack revolves around Vite.js, while the product content is sourced through the Mercado Livre API.",
		],
	},
];
