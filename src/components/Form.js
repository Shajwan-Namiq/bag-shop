import React from 'react'

function Form() {
  return (
    <div className="bg-[#edede992]">
      <h1 className="py-4 text-lg font-bold   text-slate-900 text-center uppercase">
        Checkout
      </h1>
      <div className=" py-5 md:py-10 text-slate-900">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <form className="grid grid-cols-6 gap-4">
            <div className="col-span-3">
              <label className="mb-1 block text-sm text-gray-600" for="first_name">
                First Name
              </label>

              <input
                className="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="text"
                id="first_name"
              />
            </div>

            <div className="col-span-3">
              <label className="mb-1 block text-sm text-gray-600" for="last_name">
                Last Name
              </label>

              <input
                className="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="text"
                id="last_name"
              />
            </div>

            <div className="col-span-6">
              <label className="mb-1 block text-sm text-gray-600" for="email">
                Email
              </label>

              <input
                className="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="email"
                id="email"
              />
            </div>

            <div className="col-span-6">
              <label className="mb-1 block text-sm text-gray-600" for="phone">
                Phone
              </label>

              <input
                className="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="tel"
                id="phone"
              />
            </div>

            <fieldset className="col-span-6">
              <legend className="mb-1 block text-sm text-gray-600">
                Card Details
              </legend>

              <div className=" -space-y-px rounded-lg bg-white shadow-sm">
                <div>
                  <label className="  sr-only" for="card-number">
                    Card Number
                  </label>

                  <input
                    className="relative w-full rounded-t-lg border-gray-200  border-2 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="Card number"
                  />
                </div>

                <div className="flex -space-x-px">
                  <div className="flex-1">
                    <label className="sr-only" for="card-expiration-date">
                      Expiration Date
                    </label>

                    <input
                      className="relative w-full rounded-bl-lg border-gray-200  border-2 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                      type="text"
                      name="card-expiration-date"
                      id="card-expiration-date"
                      placeholder="MM / YY"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="sr-only" for="card-cvc">
                      CVC
                    </label>

                    <input
                      className="relative w-full rounded-br-lg border-gray-200  border-2  p-2.5 text-sm placeholder-gray-400 focus:z-10"
                      type="text"
                      name="card-cvc"
                      id="card-cvc"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="col-span-6">
              <legend className="mb-1 block text-sm text-gray-600">
                Billing Address
              </legend>

              <div className="-space-y-px rounded-lg bg-white shadow-sm">
                <div>
                  <label className="sr-only" htmlFor="country">
                    Country
                  </label>

                  <select
                    className="relative w-full rounded-t-lg border-gray-200  border-2 p-2.5 text-sm focus:z-10"
                    id="country"
                    name="country"
                    autoComplete="country-name"
                  >
                    <option>Iraq</option>
                    <option>Iran</option>
                    <option>Turkey</option>
                    <option>France</option>
                    <option>UK</option>
                    <option>USA</option>
                  </select>
                </div>

                <div>
                  <label className="sr-only" for="postal-code">
                    ZIP/Post Code
                  </label>

                  <input
                    className="relative w-full rounded-b-lg border-gray-200  border-2 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    placeholder="ZIP/Post Code"
                  />
                </div>
              </div>
            </fieldset>

            <div className="col-span-6">
              <button
                className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                type="submit"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form