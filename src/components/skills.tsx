import React, { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./components.css";

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
    <div className="skills" ref={ref}>
      <div className="skills__callout">
        <h3>Skills</h3>
        <h1>
          Software development is hard. Managing <br /> projects is hard.
          Working remotely is hard.
          <br /> Here are some things I'm good at, to help
          <br /> ease the pain.
        </h1>
      </div>
      <div className="skills__content">
        <h3>Problem Solving</h3>
        <p>
          I can take vague problems and requirements and break them <br /> down
          into steps and solutions.
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
  );
}
