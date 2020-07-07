import React, { useState } from "react";
import "./index.css";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Skills from "./components/skills";

function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="App">
      <Hero history={[active, setActive]} />
      <Nav history={[active, setActive]} />
      <Skills history={[active, setActive]} />
    </div>
  );
}

export default App;
