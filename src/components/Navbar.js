import React from "react";
import { useSelector } from "react-redux";
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
          <Link
            to="/favourite"
            className="hover:bg-gray-900 bg-opacity-80 p-3 rounded-full"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="favouriteIconTitle"
              stroke="#ffba08"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#ffba08"
            >
              {" "}
              <title id="favouriteIconTitle">Favourite</title>{" "}
              <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z" />{" "}
            </svg>
          </Link>

          <div className="p-2 dropdown dropdown-end ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hover:bg-gray-900 bg-opacity-80 "
            >
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
              className="rounded-lg mt-5 card card-compact dropdown-content  w-80 bg-slate-900 shadow"
            >
              <div className=" card-body">
             

                <span className="text-info">
                  {" "}
                  <Total />
                </span>   
                <div className="mx-4 card-actions">
                  <button
                    onClick={() => navigate("/cartValue")}
                    className="btn uppercase text-base font-bold border border-white hover:text-slate-900 text-white hover:bg-white bg-slate-900 btn-block"
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
