import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Registerform from "./components/Registerform";
import ParentComponent from "./components/ParentComponent";
import Child1 from "./components/child1";
import Loginform from "./components/Loginform";
function App() {
  return (
    <>
      {/* <About />
      <Contact />
      <Registerform /> */}
      {/* <ParentComponent /> */}
      {/* <Child1 /> */}
      <Loginform />
    </>
  );
}

export default App;
