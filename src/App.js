import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Registerform from "./components/Registerform";
import ParentComponent from "./components/ParentComponent";
import Child1 from "./components/child1";
function App() {
  return (
    <>
      {/* <About />
      <Contact />
      <Registerform /> */}
      {/* <ParentComponent /> */}
      <Child1 />
    </>
  );
}

export default App;
