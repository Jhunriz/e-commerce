import React, { useState, useEffect } from "react";
import Products from "../components/Products";

export default function Content(props) {
  // const [count, setCount] = useState(0);
  // const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   setCalculation(() => count * 1);
  // }, [count]); // <- add the count variable here

  const calculation = props.calculation;
  const setCount = props.setCount;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://th.bing.com/th/id/OIP.0OZo4MxXXEiJgp85xwZcNAHaFS?pid=ImgDet&rs=1"
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Kape Juana!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-amber-950">Get Started</button>
          </div>
        </div>
      </div>
      {/*Products cards */}
      <Products calculation={calculation} setCount={setCount} />
    </div>
  );
}
