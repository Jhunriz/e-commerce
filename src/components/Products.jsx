import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import header from "../layout/Header.jsx";
import wired from "../assets/wired-lineal-615-coffee-machine.gif";
import grocery from "../assets/wired-lineal-1360-grocery-shelf.gif";
import blacktea from "../assets/wired-lineal-571-black-tea.gif";

export default function Products(props) {
  const calculation = props.calculation;
  const setCount = props.setCount;
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-24">
        {/* card 2 */}

        <div className="card w-96 bg-base-100 shadow-xl my-44">
          <figure className="px-10 pt-10">
            <img src={wired} alt="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button
                className="btn bg-amber-950"
                onClick={() => setCount((c) => c + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div className="card w-96 bg-base-100 shadow-xl my-44">
          <figure className="px-10 pt-10">
            <img src={grocery} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button
                className="btn bg-amber-950"
                onClick={() => setCount((c) => c + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* card 4 */}

        <div className="card w-96 bg-base-100 shadow-xl my-44">
          <figure className="px-10 pt-10">
            <img src={blacktea} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button
                className="btn bg-amber-950"
                onClick={() => setCount((c) => c + 1)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
