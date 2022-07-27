import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";

import './index.css';
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
