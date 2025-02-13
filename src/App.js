import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements/Achievements";


function App() {
  const [load, updateLoad] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse movement and update position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Hide cursor on click, then show after mouseup or small delay
  useEffect(() => {
    const handleMouseDown = () => setShowCursor(false);
    const handleMouseUp = () => {
      setShowCursor(true);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Re-sync cursor position after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowCursor(false);
    };

    const handleScrollStop = () => {
      setShowCursor(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollStop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollStop);
    };
  }, []);

  return (
    <Router>
    <Preloader load={load} />
    {showCursor && (
        <div
          className="cursor"
          style={{
            top: `${position.y}px`, // Latest mouse Y coordinate
            left: `${position.x}px`, // Latest mouse X coordinate
            position: 'absolute',
            pointerEvents: 'none',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: 'violet',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px 5px rgba(238, 130, 238, 0.75)', // Glow effect
          }}
        />
      )}
    <div className="App" id={load ? "no-scroll" : "scroll"}>
    {showCursor && <div
        className="cursor"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          position: 'absolute',
          pointerEvents: 'none',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'violet',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px 5px rgba(238, 130, 238, 0.75)', // Glow effect
        }}
      />}
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="Achievements">
        <Achievements />
      </div>
      <div id="Home2">
      <Home2 />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="resume">
        <Resume />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
