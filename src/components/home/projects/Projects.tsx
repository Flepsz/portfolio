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
		projectLink: "",
		tech: ["React", "React Native", "NextJS", "Python", "Django Rest"],
		description:
			"Pandora, a digital banking solution equipped with a mobile app and a dedicated landing page for effective promotion.",
		modalContent: (
			<>
				<p>
					The Senai project showcases my full-stack capabilities, where I
					single-handedly developed the entire application.
				</p>
				<p>
					On the mobile front, the frontend is powered by React Native,
					complemented by a Django Rest API backend.
				</p>
				<p>
					Additionally, there&apos;s a dedicated homepage for promotional
					purposes.
				</p>
			</>
		),
	},
	{
		title: "DragoByte",
		imgSrc: dragobyte,
		code: "https://github.com/Flepsz/DragoByte",
		projectLink: "https://dragobyte.vercel.app/",
		tech: ["React", "ViteJS", "Javascript"],
		description:
			"My inaugural experience with React.js: Building an e-commerce platform for computer enthusiasts.",
		modalContent: (
			<>
				<p>Project developed at SENAI as an evaluation.</p>
				<p>
					The tech stack revolves around Vite.js, while the product content is
					sourced through the Mercado Livre API.
				</p>
			</>
		),
	},
];
