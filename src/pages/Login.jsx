import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-2 w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 gap-4">
                <button className="btn bg-amber-900">Login</button>
                <Link to="/register" className="btn ">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
