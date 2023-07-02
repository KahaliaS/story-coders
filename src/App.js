import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages and components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./mainAppStyle.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
