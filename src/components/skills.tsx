import React, { ReactElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./components.css";
import { ReactComponent as Mongodb } from "./mongodb.svg";
import { ReactComponent as Github } from "./github.svg";

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
      <div className="skills__initial">
        <div className="skills__callout">
          <h3>Skills</h3>
          <h1>
            Software development is hard. Managing <br /> projects is hard.
            Working remotely is hard.
            <br /> Here are some things I'm good at, to help
            <br /> ease the pain.
          </h1>
          <div className="skills__image"></div>
        </div>
        <div className="skills__content">
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
      <div className="skills__second">
        <h3>Tools and Technologies</h3>
        <div className="tools__container">
          <img
            src="https://nodejs.org/static/images/logo.svg"
            width="122"
            height="75"
            className="tools__images"
            style={{
              backgroundColor: "#333",
              padding: "10px",
              borderRadius: "3px",
            }}
          ></img>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
            width="122"
            height="75"
            className="tools__images"
          ></img>
          <img
            src="https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
            alt="Express Logo"
            height="75"
            className="tools__images"
            data-canonical-src="https://i.cloudup.com/zfY6lL7eFa-3000x3000.png"
            style={{ maxWidth: "100%", borderRadius: "3px" }}
          ></img>
          <Mongodb className="tools__images" height="75" width="130" />
          {/* <img src={Mongodb} height="75" className="tools__images"></img> */}
        </div>
        <div className="tools__container">
          <img
            src="https://www.typescriptlang.org/assets/images/logo_nocircle.svg"
            width="150"
            height="75"
            className="tools__images"
            style={{
              backgroundColor: "#333",
              borderRadius: "3px",
              padding: "0 10px",
            }}
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            width="122"
            height="75"
            className="tools__images"
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt=""
            width="122"
            height="75"
            className="tools__images"
          ></img>
          <img
            src="https://www.typescriptlang.org/assets/images/startsAndEndsWithJavascript.png"
            // width="122"
            height="75"
            className="tools__images"
            style={{
              backgroundColor: "#333",
              padding: "10px 10px",
              borderRadius: "3px",
            }}
          ></img>

          {/* <img src={Mongodb} height="75" className="tools__images"></img> */}
        </div>
        <div className="tools__container">
          <img
            src="https://flutter.dev/assets/flutter-lockup-1caf6476beed76adec3c477586da54de6b552b2f42108ec5bc68dc63bae2df75.png"
            // width="170"
            height="75"
            className="tools__images"
            style={{
              borderRadius: "3px",
            }}
          ></img>
          <img
            src="https://www.gstatic.com/devrel-devsite/prod/v4d5d232859440be8edf63a1095b80ebe5c19605e99f3b348a30c4b0140c2eb88/firebase/images/lockup.png"
            height="75"
            className="tools__images"
          ></img>
          <Github className="tools__images" height="75" width="130" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"
            // width="122"
            height="75"
            className="tools__images"
           
          ></img>

          {/* <img src={Mongodb} height="75" className="tools__images"></img> */}
        </div>
        <div className="tools__container">
          <img
            src="https://www.python.org/static/img/python-logo.png"
            style={{
              backgroundColor: "#333",
              // padding: "10px",
              borderRadius: "3px",
            }}
            className="tools__images"
          />
          <img
            src="https://flask.palletsprojects.com/en/1.1.x/_images/flask-logo.png"
            style={{
              // backgroundColor: "#333",
              // padding: "10px",
              borderRadius: "3px",
            }}
            height="75"
            className="tools__images"
          />
          <img
            src="https://www.postgresql.org/media/img/about/press/elephant.png"
            style={{
              // backgroundColor: "#333",
              // padding: "10px",
              borderRadius: "3px",
            }}
            height="75"
            className="tools__images"
          />
          <img
            src="https://opencv.org/wp-content/uploads/2020/07/cropped-OpenCV_logo-1.png"
            style={{
              // backgroundColor: "#333",
              // padding: "10px",
              borderRadius: "3px",
            }}
            height="75"
            className="tools__images"
          />
        </div>
      </div>
    </div>
  );
}
