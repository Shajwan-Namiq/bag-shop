import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
 import { addToCart } from "../redux/cartSlice";

function Cart({ id, title, image, price, description, category, rating }) {
  const dispatch = useDispatch();

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-5 py-8">
        <div>
          <a className="relative block border border-gray-300">
            <a href="#" class="group relative h-96  w-full block  ">
              <img
                alt="Developer"
                src={image}
                class="absolute inset-0 h-full w-full object-contain     transition-opacity group-hover:opacity-10 "
              />

              <div class="relative py-10 px-5">
                <button
                  type="button"
                  className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                >
                  <span className="sr-only">Wishlist</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </button>

                <button
                  type="button"
                  className="absolute left-4 top-4 rounded-full bg-black p-2 text-white"
                >
                  ${price}
                </button>
                <div class="mt-6 mb-10">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 ">
                    <p class="text-sm text-slate-900">{description}</p>
                  </div>
                </div>
              </div>
            </a>

            <div className="p-6 ">
              <h3 className="mb-3 text-sm font-bold text-gray-800">{title}</h3>
            
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id,
                      title,
                      image,
                      price,
                      description,
                      category,
                      rating,
                    })
                  )
                }
                type="button"
                className="text-sm font-bold text-white mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 hover:bg-yellow-400 px-8 py-4"
              >
                {" "}
                Add to Cart
                <svg
                  className="ml-1.5 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cart