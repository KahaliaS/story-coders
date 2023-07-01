import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages and components
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./mainAppStyle.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
