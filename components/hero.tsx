import React, {
  ReactElement,
  SetStateAction,
  Dispatch,
  useEffect,
} from "react";
import { useInView } from "react-intersection-observer";
import styles from "./components.module.css";

interface Props {
  history: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function Hero({ history }: Props): ReactElement {
  const [active, setActive] = history;
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: [0.25, 0.5, 0.75],
  });

  useEffect(() => {
    if (inView) setActive("home");
  }, [inView]);

  return (
    <div className={styles.hero} ref={ref}>
      <div className={styles.hero__appeals}>
        <h1>Hello, I'm a Software Developer.</h1>
        <h1>
          I can help solve <del className={styles.del}>most of</del> your problems!
        </h1>
        <div className={styles.space} />
        <h2>I design, build & sometimes rescue applications.</h2>
        <h2> Have a project, idea or problem you'd like to discuss?</h2>
        <h2> Let's chat blazinasis@gmail.com</h2>
      </div>
    </div>
  );
}
