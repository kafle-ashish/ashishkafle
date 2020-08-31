import "intersection-observer";
import Head from "next/head";
import React, { useState } from "react";
import Hero from "../components/hero";
import Nav from "../components/nav";
import Skills from "../components/skills";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div className="App">
      <Head>
        <title>Ashish Kafle | Full Stack Developer</title>
      </Head>
      <Hero history={[active, setActive]} />
      <Nav history={[active, setActive]} />
      <Skills history={[active, setActive]} />
    </div>
  );
}
