import "./App.css";
import Header from "./components/all-page-resources/header/Header";
import Footer from "./components/all-page-resources/footer/Footer";
import Home from "./components/home-page/Home";
import Skills from "./components/skills-page/Skills";
import Projects from "./components/projects-page/Projects";
import About from "./components/about-page/About";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const allPages = [
    ["Home", "/"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Skills", "/skills"],
  ];
  const location = useLocation();

  useEffect(() => {
    // The current location changed.
    window.scrollTo(0, 0);
    const floatIn = [...document.querySelectorAll(".inactive"), ...document.querySelectorAll(".active")];
    const options = {
      threshold: [0.25, 0.5, 0.75, 1],
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.2) {
          // Add 'active' class if observation target is inside viewport
          entry.target.classList.remove("inactive");
          entry.target.classList.add("active");
        }
      });
    }, options);

    floatIn.forEach((section) => {
      io.observe(section);
    });
  }, [location]);

  return (
    <div className="app">
      <Header allPages={allPages} currentLocation={location} />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/projects" Component={Projects} />
        <Route path="/skills" Component={Skills} />
      </Routes>
      <Footer allPages={allPages} currentLocation={location} />
    </div>
  );
}

export default App;
