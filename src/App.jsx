import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Structure from "./layout/Structure";
import Routing from "./routes/Routing";

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
