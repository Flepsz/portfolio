import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
	return (
		<section className="section-wrapper" id="contact">
			<div className={styles.contactWrapper}>
				<Reveal width="100%">
					<h4 className={styles.contactTitle}>
						Contact<span>.</span>
					</h4>
				</Reveal>
				<Reveal width="100%">
					<p className={styles.contactCopy}>
					Questions or collaboration ideas? Feel free to drop me an email. If you prefer networking, you can also catch up with me on {" "}
						<Link
							href="https://www.linkedin.com/in/felipepereiraa/"
							target="_blank"
							rel="nofollow"
						>
							Linkedin
						</Link>{" "}
						
					</p>
				</Reveal>
				<Reveal width="100%">
					<Link href="mailto:luisfelipelfsp3@gmail.com">
						<div className={styles.contactEmail}>
							<AiFillMail size="2.4rem" />
							<span>Send Email</span>
						</div>
					</Link>
				</Reveal>
			</div>
		</section>
	);
};
