import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Skills, Projects, Contact, Whoops404 } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/reactApp/" element={<Home />} />
        <Route path="/reactApp/about" element={<About />} />
        <Route path="/reactApp/skills" element={<Skills />} />
        <Route path="/reactApp/projects" element={<Projects />} />
        <Route path="/reactApp/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </>
  );
}

export default App;
