import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";

function App() {
  const name = {
    name: "Jhunriz",
    age: "23",
  };

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 1);
  }, [count]);

  return (
    <>
      <Header calculation={calculation} setCount={setCount} count={count} />
      <Content calculation={calculation} setCount={setCount} />
      <Footer />
    </>
  );
}

export default App;
