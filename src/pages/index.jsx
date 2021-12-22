import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Landing from "../sections/Landing";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export const modeContext = React.createContext({ get: false, set() {} });
export default function IndexPage() {
  const [mode, setMode] = useState();
  useEffect(() => setMode(localStorage.getItem("dark_mode") === "true"), []);
  useEffect(() => {
    if (mode) {
      document.body.classList.add("dark");
      localStorage.setItem("dark_mode", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("dark_mode", false);
    }
  }, [mode]);
  return (
    <modeContext.Provider value={{ get: mode, set: setMode }}>
      <Layout title="Home">
        <Landing />
        <About />
        <Skills />
        <Contact />
      </Layout>
    </modeContext.Provider>
  );
}
