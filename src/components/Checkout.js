import React from 'react'
 import { useNavigate } from "react-router-dom";

function Checkout({quantity, price}){
  
  const navigate = useNavigate();

  return (
    <div>
      <div className="rounded-lg text-white bg-slate-900 dark:bg-white dark:text-slate-900 dark:border-red-800    mt-0 px-2  w-full">
        <div>
          <h2 className="border-b-2 py-4 flex justify-center text-lg font-bold ">
            Purchase Summary
          </h2>

          <div className="mx-2 rounded py-8">
            <div className=" ">
              <div className="flex items-end">
                <p
                  className="text-sm font-medium focus:outline-none  "
                  name=""
                  id=""
                >
                  Items
                </p>
                <span className=" text-sm ml-auto font-bold">
                  {quantity} items
                </span>
              </div>
            </div>
            <div className="  mt-4">
              <div className="flex items-end justify-between">
                <span className="text-sm font-semibold">Delivery Charges</span>
                <span className="text-sm  mb-px">Free</span>
              </div>
            </div>
            <div className=" mt-4   pt-4">
              <div className="flex items-end justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-red-900">${price}</span>
              </div>
            </div>
            <div className="flex items-center  mt-8">
              <input id="termsConditions" type="checkbox" />
              <label className="text-xs text-gray-500 ml-1">
                I agree to the terms and conditions.
              </label>
            </div>
            <div className="flex flex-col  pt-4">
              <button
                onClick={() => navigate("/form")}
                className="uppercase flex items-center justify-center bg-slate-200 text-base font-bold w-full h-10 rounded text-slate-900 hover:bg-red-900 hover:text-white"
              >
                Payment
              </button>
              <button className="text-xs text-slate-500 mt-3 underline">
                Free delivery for orders above $1000
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Checkout