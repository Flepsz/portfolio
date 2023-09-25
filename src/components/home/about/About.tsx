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
							Hello! I&apos;m Luis Felipe Pereira, a Systems Developer
							Apprentice with a diverse skill set.
							<br />
							<br />I have experience in desktop, web, and mobile development,
							encompassing full-stack development. My passion lies in crafting
							websites and comprehensive systems.
						</p>
					</Reveal>
					<Reveal>
						<p className={styles.aboutText}>
            My skillset spans HTML, CSS, JavaScript, TypeScript, and an array of frameworks, such as React and Django. I&apos;ve also delved into backend technologies, including Node.js, Python, Java, Firebase, MongoDB, and MySQL, empowering me to architect full-stack applications.
						</p>
					</Reveal>
					<Reveal>
						<p className={styles.aboutText}>
            When I&apos;m not coding, I find enjoyment in playing games, particularly first-person shooters (FPS). I also have a penchant for reading books.
						</p>
					</Reveal>
					<Reveal>
						<p className={styles.aboutText}>
            I&apos;m perpetually seeking fresh challenges and opportunities to expand my knowledge and evolve as a developer. If you&apos;re interested in collaboration or have any inquiries, please feel free to reach out. I&apos;m here to connect! 🔗
						</p>
					</Reveal>
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
