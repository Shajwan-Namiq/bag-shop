import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Total from "./Total";
import { useNavigate } from "react-router-dom";
import Image from "./image/logo.png";


const Navbar = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  //bag shop icon number
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div>
      <div className="navbar bg-slate-900 bg-opacity-40">
        <div className="flex-1">
          <Link to="/">
            <img src={Image} width="50" height="50" alt="" className="ml-2" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="p-2 dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
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
                <span className="text-red-600 text-lg badge indicator-item">
                  {getTotalQuantity() || 0}
                </span>
              </div>
            </label>

            <div
              tabIndex={0}
              className="rounded-lg mt-5 card card-compact dropdown-content  w-64 bg-slate-900 shadow"
            >
              <div className=" card-body">
                <span className="text-info">
                  {" "}
                  <Total />
                </span>

                <div className="card-actions">
                  <button
                    onClick={() => navigate("/cartValue")}
                    className="btn text-white bg-gray-800 btn-block"
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
