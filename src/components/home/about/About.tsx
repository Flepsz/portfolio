import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
	return (
		<section id="about" className="section-wrapper">
			<SectionHeader title="About" dir="l" />
			<div className={styles.about}>
				<div>
					<Reveal>
						<p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
							{about.highlight}
						</p>
					</Reveal>
					{about.content.map((item) => (
						<Reveal key={item}>
							<p className={styles.aboutText}>{item}</p>
						</Reveal>
					))}
					<Reveal>
						<div className={styles.links}>
							<div className={styles.linksText}>
								<span>My links</span>
								<AiOutlineArrowRight />
							</div>
							<MyLinks />
						</div>
					</Reveal>
				</div>
				<Stats />
			</div>
		</section>
	);
};

const about = {
	highlight:
		"Hello! I'm Luis Felipe Pereira, a Systems Developer Apprentice with a diverse skill set.",
	content: [
		"I'm a developer with a passion for crafting user-friendly web applications and comprehensive systems. My expertise spans across JavaScript (including TypeScript), Java, Python, and frameworks like React, Next.js, Spring, and Django. This comprehensive skillset allows me to seamlessly handle both front-end and back-end development, architecting robust and scalable solutions.",

		"My dedication to continuous learning fuels my drive to tackle new challenges and expand my knowledge base. I actively seek opportunities to push my boundaries and contribute to innovative projects.",

		"When I'm not coding, I find enjoyment in playing games, particularly first-person shooters (FPS). I also have a penchant for reading books.",

		"I'm perpetually seeking fresh challenges and opportunities to expand my knowledge and evolve as a developer. If you're interested in collaboration or have any inquiries, please feel free to reach out. I'm here to connect! 🔗",
	],
};
