import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import data from "../data";

function Cart() {
  const dispatch = useDispatch();

  return (
    <section className="">
      <div className="bg-white">
        <div className="py-10 relative mx-auto max-w-3xl text-center">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>

          <h2 className="relative inline-block bg-white px-4 text-center text-2xl font-bold">
            Recently Viewed
          </h2>
        </div>
        
        <div className="py-5  px-5 lg:px-20 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-3 ">
          {data.map((item) => {
            const { id, price, title, description, image, category, rating } =
              item;

            return (
              <>
                <div className="relative block border border-gray-300">
                  <a href="#" className="group relative h-96  w-full block  ">
                    <img
                      alt="Developer"
                      src={image}
                      className="absolute inset-0 h-full w-full object-contain     transition-opacity group-hover:opacity-10 "
                    />

                    <div className="relative py-10 px-5">
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
                      <div className="mt-6 mb-10">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 ">
                          <p className="text-sm text-slate-900">{description}</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="p-6 ">
                    <h3 className="mb-3 text-sm font-bold text-gray-800">
                      {title}
                    </h3>

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
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Cart;
