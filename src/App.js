import './App.scss';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from './containers/home';
import Contact from './containers/contact';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Navbar from './components/navBar';
import particles from './utils/particles';

function App() {

  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderParticlesJs = location.pathname === "/";

  return (
    <div className="App">
      {/* Particle js */}
      {
        renderParticlesJs &&
        <Particles id="particles" options={particles} init={handleInit} />
      }
      {/* Navbar */}
      <Navbar />

      {/* Main Page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
