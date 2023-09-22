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
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">React Native</span>
            <span className="chip">NextJS</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Java</span>
            <span className="chip">Python</span>
            <span className="chip">Django</span>
            <span className="chip">Django Rest</span>
            <span className="chip">MySQL</span>
            <span className="chip">GitHub</span>
            
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
          <span className="chip">C#</span>
            <span className="chip">Rust</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Firebase</span>
            <span className="chip">Figma</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Vercel</span>
            <span className="chip">C++</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
