import React, { ReactElement, Dispatch, SetStateAction } from "react";
import "./components.css";
import Button from "./button";

interface Props {
  history: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function Nav({ history }: Props): ReactElement {
  const [active, setActive] = history;

  return (
    <nav>
      <div className="avatar__holder">
        <div className="avatar"></div>
        <div className="avatar__title">
          <h3>Ashish Kafle</h3>
          <h4>Full Stack Developer</h4>
        </div>
      </div>

      <div className="nav__elements">
        <Button className={active === "home" ? "active" : ""}>Home</Button>
        <Button className={active === "about" ? "active" : ""}>About</Button>
        <Button>Contact</Button>
      </div>
    </nav>
  );
}
