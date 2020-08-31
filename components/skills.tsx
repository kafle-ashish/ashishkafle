import React, { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaNode, FaReact } from 'react-icons/fa';
import { SiTypescript, SiCsswizardry, SiFirebase, SiLinux, SiPython, SiFlask, SiPostgresql, SiMongodb } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';
import { DiJavascript1 } from 'react-icons/di';
import { RiFlutterLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { MdVisibility } from 'react-icons/md';

import styles from "./components.module.css";

interface Props {
  history: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function Skills({ history }: Props): ReactElement {
  const [active, setActive] = history;
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: [0.25, 0.5, 0.75],
  });

  useEffect(() => {
    if (active != "about" && inView) setActive("about");
  }, [inView]);

  return (
    <div className={styles.skills} ref={ref}>
      <div className={styles.skills__initial}>
        <div className={styles.skills__callout}>
          <h3>Skills</h3>
          <h1>
            Software development is hard. Managing <br /> projects is hard.
            Working remotely is hard.
            <br /> Here are some things I'm good at, to help
            <br /> ease the pain.
          </h1>
          <div className={styles.skills__image}></div>
        </div>
        <div className={styles.skills__content}>
          <h3>Problem Solving</h3>
          <p>
            I can take vague problems and requirements and break them <br />{" "}
            down into steps and solutions.
          </p>

          <h3>Systems Thinking</h3>
          <p>
            I'm good at thinking abstractly and putting together systems
            <br /> with many moving parts.
          </p>
          <h3>Communicating</h3>
          <p>
            I can explain things clearly, communicate problems quickly
            <br /> and write accurately and concisely.
          </p>
          <h3>Organising</h3>
          <p>
            I can self-manage, work to deadlines, organise projects and
            <br /> present well-structured and complete deliverables.
          </p>
        </div>
      </div>
      <div className={styles.skills__second}>
        <h3>Tools and Technologies</h3>
        <div className={styles.tools__container}>
          <FaNode className={styles.tools__images} fontSize={100} />
          <FaReact className={styles.tools__images} fontSize={100} />
          <Express />
          <SiMongodb className={styles.tools__images} fontSize={100} />
        </div>
        <div className={styles.tools__container}>
          <SiTypescript className={styles.tools__images} fontSize={100} />
          <TiHtml5 className={styles.tools__images} fontSize={100} />
          <SiCsswizardry className={styles.tools__images} fontSize={100} />
          <DiJavascript1 className={styles.tools__images} fontSize={100} />
        </div>
        <div className={styles.tools__container}>
          <RiFlutterLine className={styles.tools__images} fontSize={100} />
          <SiFirebase className={styles.tools__images} fontSize={100} />
          <FiGithub className={styles.tools__images} fontSize={100} />
          <SiLinux className={styles.tools__images} fontSize={100} />
        </div>
        <div className={styles.tools__container}>
          <SiPython className={styles.tools__images} fontSize={100} />
          <SiFlask className={styles.tools__images} fontSize={100} />
          <SiPostgresql className={styles.tools__images} fontSize={100} />
          <MdVisibility className={styles.tools__images} fontSize={100} />
        </div>
      </div>
    </div>
  );
}

const Express = () => <svg width="120" height="60" fontSize={100} className={styles.tools__images}>
  <path d="M40 41.753V18.708h1.25v3.625a4.74 4.74 0 00.408-.511c1.044-2.166 3.246-3.533 5.65-3.506 2.85-.085 5.166.97 6.527 3.506a11.27 11.27 0 01.272 10.331c-1.268 2.842-4.4 4.255-7.753 3.736a6.27 6.27 0 01-5.004-3.302v9.165zm1.25-14.893l.28 2.706c.494 3.08 2.315 4.9 5.174 5.242a5.88 5.88 0 006.459-3.736c1.112-2.65 1.03-5.65-.22-8.238a5.76 5.76 0 00-6.068-3.353 5.61 5.61 0 00-5.012 4.144 28.62 28.62 0 00-.613 3.234zm39.498 3.132a6.74 6.74 0 01-6.587 5.957c-5.242.264-7.702-3.217-8.093-7.234a11.59 11.59 0 011.021-6.383 7.12 7.12 0 017.412-3.974 6.81 6.81 0 016.042 5.183 34.97 34.97 0 01.587 3.83H67.363c-.255 3.642 1.702 6.57 4.476 7.276 3.455.85 6.408-.647 7.48-3.932.238-.843.672-.962 1.438-.723zm-13.395-3.787h12.314c-.077-3.88-2.493-6.7-5.77-6.732-3.7-.06-6.383 2.647-6.544 6.732zm15.94 3.872H84.5a4.84 4.84 0 002.842 4.17 7.43 7.43 0 006.451-.17 2.9 2.9 0 001.702-2.851 2.63 2.63 0 00-1.77-2.63c-1.328-.494-2.74-.766-4.093-1.2a30 30 0 01-4.119-1.506c-2.18-1.064-2.315-5.208.153-6.52a8.69 8.69 0 018.306-.128c1.594.88 2.475 2.657 2.213 4.46H95.15c0-.05-.094-.094-.094-.145-.128-3.3-2.902-4.332-5.88-4.042-.9.1-1.753.372-2.553.774a2.55 2.55 0 00-1.48 2.553 2.55 2.55 0 001.702 2.4c1.3.477 2.68.783 4.025 1.157l3.25.85a3.84 3.84 0 012.638 3.464c.26 1.745-.63 3.46-2.204 4.255-2.842 1.608-7.523 1.183-9.608-.85-1.067-1.073-1.662-2.53-1.65-4.042zm28.78-6.374h-1.132c0-.153-.06-.3-.077-.417a3.7 3.7 0 00-3.013-3.557 7.43 7.43 0 00-4.774.23 2.9 2.9 0 00-2.102 2.766 2.67 2.67 0 002.042 2.689l5.174 1.328a14.39 14.39 0 011.65.502c1.65.6 2.77 2.132 2.82 3.883a4.25 4.25 0 01-2.6 4.04 9.47 9.47 0 01-7.659.077 5.31 5.31 0 01-3.2-5.157h1.106c.416 2.005 1.793 3.675 3.682 4.465s4.046.596 5.764-.516a3.04 3.04 0 001.634-2.842 2.63 2.63 0 00-1.796-2.613c-1.328-.494-2.74-.757-4.093-1.2a30.15 30.15 0 01-4.144-1.489c-2.128-1.047-2.298-5.157.128-6.468a8.57 8.57 0 018.442-.094 4.45 4.45 0 012.136 4.366zm-74.13 11.83a1.95 1.95 0 01-2.417-.919l-4.4-6.085-.638-.85-5.106 6.944a1.87 1.87 0 01-2.298.902l6.578-8.825-6.12-7.974c.908-.328 1.92.028 2.425.85l4.56 6.16 4.587-6.136a1.83 1.83 0 012.281-.851L35.02 21.9l-3.217 4.187a.85.85 0 000 1.268l6.127 8.178zm27.93-16.892v1.2a6.17 6.17 0 00-6.57 6.374V35.576h-1.217v-16.86h1.2v3.455c1.472-2.52 3.744-3.455 6.595-3.523zM7.333 26.59l.536-2.647c1.472-5.234 7.472-7.412 11.6-4.17 2.417 1.898 3.02 4.587 2.902 7.617H8.754c-.22 5.412 3.685 8.68 8.68 7.012 1.646-.6 2.885-1.968 3.293-3.668.264-.85.7-.996 1.498-.75a6.91 6.91 0 01-3.302 5.047 8 8 0 01-9.319-1.191c-1.216-1.367-1.95-3.095-2.093-4.92 0-.3-.1-.58-.17-.85q-.01-.757-.01-1.48zm1.438-.366h12.314c-.077-3.923-2.553-6.706-5.855-6.732-3.676-.05-6.306 2.672-6.468 6.715z" />
</svg>
