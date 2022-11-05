import React from 'react'
 import { useNavigate } from "react-router-dom";

function Checkout({quantity, price}){
  
  const navigate = useNavigate();

  return (
    <div>
      <div class="text-white bg-slate-900 shadow-lg mt-0 px-2  w-full">
        <div>
          <h2 class="border-b-2 py-4 flex justify-center text-lg font-bold ">
            Purchase Summary
          </h2>

          <div class="mx-2 rounded  py-8">
            <div class=" ">
              <div class="flex items-end">
                <p
                  class="text-sm font-medium focus:outline-none  "
                  name=""
                  id=""
                >
                  Items
                </p>
                <span class=" text-sm ml-auto font-bold">{quantity} items</span>
              </div>
            </div>
            <div class="  mt-4">
              <div class="flex items-end justify-between">
                <span class="text-sm font-semibold">Delivery Charges</span>
                <span class="text-sm  mb-px">Free</span>
              </div>
            </div>
            <div class=" mt-4   pt-4">
              <div class="flex items-end justify-between">
                <span class="font-semibold">Total</span>
                <span class="font-bold text-red-900">${price}</span>
              </div>
            </div>
            <div class="flex items-center  mt-8">
              <input id="termsConditions" type="checkbox" />
              <label class="text-xs text-gray-500 ml-1">
                I agree to the terms and conditions.
              </label>
            </div>
            <div class="flex flex-col  pt-4">
              <button
                onClick={() => navigate("/form")}
                class="uppercase flex items-center justify-center bg-slate-200 text-base font-bold w-full h-10 rounded text-slate-900 hover:bg-red-900 hover:text-white"
              >
                Payment
              </button>
              <button class="text-xs text-slate-500 mt-3 underline">
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