import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Structure from "../layout/Structure";
import Register from "../pages/Register";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="Landing" element={<Structure />}></Route>
          <Route path="Register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
