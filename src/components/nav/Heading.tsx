"use client"
import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      {/* <div className={styles.headingButtons}> */}

        <OutlineButton onClick={() => window.open("/resume.pdf")}>
          My resume
        </OutlineButton>
      {/* </div> */}
    </header>
  );
};

