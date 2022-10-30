import React from 'react'


function Form() {
  return (
    <>
      <h1 class="sr-only">Checkout</h1>

      <div class="bg-[#edede992]  py-12 md:py-24 text-slate-900">
        <div class="mx-auto max-w-lg px-4 lg:px-8">
          <form class="grid grid-cols-6 gap-4">
            <div class="col-span-3">
              <label class="mb-1 block text-sm text-gray-600" for="first_name">
                First Name
              </label>

              <input
                class="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="text"
                id="first_name"
              />
            </div>

            <div class="col-span-3">
              <label class="mb-1 block text-sm text-gray-600" for="last_name">
                Last Name
              </label>

              <input
                class="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="text"
                id="last_name"
              />
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="email">
                Email
              </label>

              <input
                class="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="email"
                id="email"
              />
            </div>

            <div class="col-span-6">
              <label class="mb-1 block text-sm text-gray-600" for="phone">
                Phone
              </label>

              <input
                class="w-full rounded-lg border-gray-200  border-2  p-2.5 text-sm shadow-sm"
                type="tel"
                id="phone"
              />
            </div>

            <fieldset class="col-span-6">
              <legend class="mb-1 block text-sm text-gray-600">
                Card Details
              </legend>

              <div class=" -space-y-px rounded-lg bg-white shadow-sm">
                <div>
                  <label class="  sr-only" for="card-number">
                    Card Number
                  </label>

                  <input
                    class="relative w-full rounded-t-lg border-gray-200  border-2 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                    type="text"
                    name="card-number"
                    id="card-number"
                    placeholder="Card number"
                  />
                </div>

                <div class="flex -space-x-px">
                  <div class="flex-1">
                    <label class="sr-only" for="card-expiration-date">
                      Expiration Date
                    </label>

                    <input
                      class="relative w-full rounded-bl-lg border-gray-200  border-2 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                      type="text"
                      name="card-expiration-date"
                      id="card-expiration-date"
                      placeholder="MM / YY"
                    />
                  </div>

                  <div class="flex-1">
                    <label class="sr-only" for="card-cvc">
                      CVC
                    </label>

                    <input
                      class="relative w-full rounded-br-lg border-gray-200  border-2  p-2.5 text-sm placeholder-gray-400 focus:z-10"
                      type="text"
                      name="card-cvc"
                      id="card-cvc"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset class="col-span-6">
              <legend class="mb-1 block text-sm text-gray-600">
                Billing Address
              </legend>

              <div class="-space-y-px rounded-lg bg-white shadow-sm">
                <div>
                  <label class="sr-only" for="country">
                    Country
                  </label>

                  <select
                    class="relative w-full rounded-t-lg border-gray-200  border-2 p-2.5 text-sm focus:z-10"
                    id="country"
                    name="country"
                    autocomplete="country-name"
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
                  <label class="sr-only" for="postal-code">
                    ZIP/Post Code
                  </label>

                  <input
                    class="relative w-full rounded-b-lg border-gray-200  border-2 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    placeholder="ZIP/Post Code"
                  />
                </div>
              </div>
            </fieldset>

            <div class="col-span-6">
              <button
                class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                type="submit"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form