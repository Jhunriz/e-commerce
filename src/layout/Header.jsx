import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Products from "../components/Products";

export default function Header(props) {
  const calculation = props.calculation;
  const setCount = props.setCount;

  return (
    <div>
      <div className="navbar lg:px-24 bg-amber-950 w-full p-5 shadow-lg sticky">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Kape Juana!</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  <h1>{calculation}</h1>
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{calculation} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn bg-amber-950 btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://th.bing.com/th/id/R.c6d2355015563f324dbc20c6b54c94f2?rik=TIf5xldJliqfvw&riu=http%3a%2f%2ffree-profile-pics.com%2fprofile-pictures%2f01232014%2fdownload%2fmr-bean-profile-picture-512x512.png&ehk=kZYOZKp%2b3KesE%2bD017qPZzaafN%2fU51US5ZzVc2hXrso%3d&risl=&pid=ImgRaw&r=0" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
