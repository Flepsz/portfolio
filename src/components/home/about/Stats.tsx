import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
	return (
		<div className={styles.stats}>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillCode size="2.4rem" color="var(--brand)" />
						<span>Use at work</span>
					</h4>
					<div className={styles.statGrid}>
						{stats.work.map((sWork) => (
							<span className="chip" key={sWork}>
								{sWork}
							</span>
						))}
					</div>
				</div>
			</Reveal>
			<Reveal>
				<div className={styles.statColumn}>
					<h4>
						<AiFillSmile size="2.4rem" color="var(--brand)" />
						<span>Use for fun</span>
					</h4>
					<div className={styles.statGrid}>
						{stats.fun.map((sfun) => (
							<span className="chip" key={sfun}>
								{sfun}
							</span>
						))}
					</div>
				</div>
			</Reveal>
		</div>
	);
};

const stats = {
	work: [
		"TypeScript",
		"Next.js",
		"React Native",
		"Tailwind",
		"React Query",
		"Zustand",
		"Node.js",
		"Java",
		"Spring",
		"Python",
		"Django",
		"MySQL",
		"PostgreSQL",
		"GitHub",
	],
	fun: [
		"Prisma",
		"tRPC",
		"Express",
		"Zod",
		"Vercel",
		"C#",
		"Rust",
		"MongoDB",
		"Firebase",
		"GraphQL",
	],
};
