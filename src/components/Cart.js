import React from 'react'
import { useState } from 'react';
import Cardsdata from "./CardsData";

const Cart = () => {
const [data, setData] = useState(Cardsdata);

  return (
    <div className='bg-white'>
      <h1 className="pt-8 text-center">Add to Cart Projects</h1>

      <div className="mt-8 px-5 lg:px-16  grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-3">
        {data.map((element, id) => {
          return (
            <>
              <section>
                <div class="mx-auto max-w-screen-xl px-5 py-8">
                  <div>
                    <a href="#" class="relative block border border-gray-300">
                      <button
                        type="button"
                        class="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                      >
                        <span class="sr-only">Wishlist</span>
                        <svg
                          class="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          ></path>
                        </svg>
                      </button>

                      <img
                        alt="Toy"
                        src={element.image}
                        class="h-56 w-full object-contain "
                      />

                      <div class="p-6">
                        <h3 class="mb-9 text-sm font-bold text-gray-800">
                          {element.title}
                        </h3>
                        <p class="text-sm font-bold text-slate-800">
                          ${element.price}
                        </p>

                        <button
                          type="button"
                          class="text-black mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 hover:bg-yellow-600 px-8 py-4"
                        >
                          <span class="text-sm font-medium ">
                            {" "}
                            Add to Cart{" "}
                          </span>

                          <svg
                            class="ml-1.5 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                        </button>
                      </div>
                    </a>
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cart