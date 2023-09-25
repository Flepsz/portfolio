"use client";
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";
import Link from "next/link";

export const Heading = () => {
	return (
		<header className={styles.heading}>
			<MyLinks />
			<OutlineButton>
				<Link
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					My resume
				</Link>
			</OutlineButton>
		</header>
	);
};
