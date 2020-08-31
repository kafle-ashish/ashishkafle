import React, { ReactElement } from "react";
import styles from "./components.module.css";
import Button from "./button";
import { useInView } from "react-intersection-observer";

interface Props {
  history: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function Nav({ history }: Props): ReactElement {
  const [active, __] = history;

  const [ref, _, entry] = useInView({
    /* Optional options */
    threshold: [0.25, 0.5, 0.75],
  });


  const showShadow = entry?.target.getClientRects()?.item(0)?.top === 0 ?? false;

  return (
    <nav className={styles.nav + ` ${showShadow ? styles.nav__shadow : ''}`} ref={ref}>
      <div className={styles.avatar__holder}>
        <div className={styles.avatar}></div>
        <div className={styles.avatar__title}>
          <h3>Ashish Kafle</h3>
          <h4>Full Stack Developer</h4>
        </div>
      </div>

      <div className={styles.nav__elements}>
        <Button className={styles.btn + (active === "home" ? ` ${styles.active}` : "")}>Home</Button>
        <Button className={styles.btn + (active === "about" ? ` ${styles.active}` : "")}>About</Button>
        <Button className={styles.btn}>Contact</Button>
      </div>
    </nav>
  );
}
