import React, { useState, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Structure() {
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
    <div>
      <Header calculation={calculation} setCount={setCount} />
      <Content calculation={calculation} setCount={setCount} />
      <Footer />
    </div>
  );
}
