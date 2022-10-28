import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
 

const Navbar = () => {


const getdata = useSelector((state) => state.cartreducer);




  return (
    <div>
      <div className="navbar bg-slate-900 bg-opacity-40">
        <div className="flex-1">
          <Link to="/">
            <img
              src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80"
              width="50"
              height="42"
              alt=""
              className="ml-2"
            />
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
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="rounded-sm mt-3 card card-compact dropdown-content  w-96 bg-slate-900 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">Your cart is empty</span>
                <span className="text-info">Subtotal: $999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar