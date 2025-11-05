import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { lazy, Suspense } from "react";
const Projects = lazy(() => import("./Components/Projects"));
const Certificates = lazy(() => import("./Components/Certificates"));
const Skills = lazy(() => import("./Components/Skills"));
const AboutMe = lazy(() => import("./Components/AboutMe"));
const Footer = lazy(() => import("./Components/Footer"));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <Certificates />
        <Skills />
        <AboutMe />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
