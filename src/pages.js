import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import "./App.css";

export function Home() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-active nav-item" to="/reactApp/">
          Home
        </Link>
        <Link className="nav-item" to="/reactApp/about">
          About
        </Link>
        <Link className="nav-item" to="/reactApp/skills">
          Skills
        </Link>
        <Link className="nav-item" to="/reactApp/projects">
          Projects
        </Link>
        <Link className="nav-item" to="/reactApp/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}

export function About() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-item" to="/reactApp/">
          Home
        </Link>
        <Link className="nav-active nav-item" to="/reactApp/about">
          About
        </Link>
        <Link className="nav-item" to="/reactApp/skills">
          Skills
        </Link>
        <Link className="nav-item" to="/reactApp/projects">
          Projects
        </Link>
        <Link className="nav-item" to="/reactApp/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}
export function Skills() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-item" to="/reactApp/">
          Home
        </Link>
        <Link className="nav-item" to="/reactApp/about">
          About
        </Link>
        <Link className="nav-active nav-item" to="/reactApp/skills">
          Skills
        </Link>
        <Link className="nav-item" to="/reactApp/projects">
          Projects
        </Link>
        <Link className="nav-item" to="/reactApp/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}

export function Projects() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-item" to="/reactApp/">
          Home
        </Link>
        <Link className="nav-item" to="/reactApp/about">
          About
        </Link>
        <Link className="nav-item" to="/reactApp/skills">
          Skills
        </Link>
        <Link className="nav-active nav-item" to="/reactApp/projects">
          Projects
        </Link>
        <Link className="nav-item" to="/reactApp/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}

export function Contact() {
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-item" to="/reactApp/">
          Home
        </Link>
        <Link className="nav-item" to="/reactApp/about">
          About
        </Link>
        <Link className="nav-item" to="/reactApp/skills">
          Skills
        </Link>
        <Link className="nav-item" to="/reactApp/projects">
          Projects
        </Link>
        <Link className="nav-active nav-item" to="/reactApp/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-item" to="/reactApp/">
          Home
        </Link>
        <Link className="nav-item" to="/reactApp/about">
          About
        </Link>
        <Link className="nav-item" to="/reactApp/skills">
          Skills
        </Link>
        <Link className="nav-item" to="/reactApp/projects">
          Projects
        </Link>
        <Link className="nav-item" to="/reactApp/contact">
          Contact
        </Link>
      </nav>
      <h1 className="App-header">Resource not found at {location.pathname}!</h1>
    </>
  );
}
