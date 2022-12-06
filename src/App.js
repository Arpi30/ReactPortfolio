import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Project } from "./components/project";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <div style={{ flex: "1", position: "relative" }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route index path="/project" element={<Project />}></Route>
            <Route index path="/about" element={<About />}></Route>
            <Route index path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
