import { useState, useEffect } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";

function CardsDetail({
  id,
  image,
  title,
  price,
  description,
  rating,
  category,
  quantity = 0,
}) {
  const dispatch = useDispatch();
  //console.log("quantity: ",quantity);
  const [newPrice, Setnewprice] = useState(price);
  //find total price for each product
  useEffect(() => {
    if (quantity) {
      const x = price * quantity;
      Setnewprice(x);
    }
  });

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-lg px-4 lg:px-8">
          <div className="mt-12">
            <div className="flow-root">
              <ul className="-my-4 divide-y divide-gray-700">
                <li className="flex items-center justify-between py-4">
                  <div className="flex items-start">
                    <img
                      alt="name"
                      src={image}
                      className="h-32 w-32    flex-shrink-0 rounded-lg object-cover"
                    />

                    <div className="ml-4 text-slate-900">
                      <p className="text-sm">{title}</p>

                      <dl className="mt-2 space-y-2 text-xs text-gray-500">
                        <div>
                          <dt className="inline text-gray-400 ">category: </dt>
                          <dd className="inline">{category}</dd>
                        </div>

                        <div className="text-gray-400 mt-2 flex">
                          Rating {rating.rate} {"  "}:
                          <ReactStars
                            count={5}
                            value={rating.rate}
                            edit={false}
                            isHalf={true}
                            size={20}
                            activeColor="#ffba08"
                            color="gray"
                          />
                        </div>

                        <div>
                          <dt className="inline text-gray-400 ">Price: </dt>
                          <dd className="inline text-[#ffba08] font-bold text-base">
                            $ {newPrice}
                          </dd>
                        </div>

                        <div>
                          <div className="flex my-3 ">
                            <p className="inline text-gray-400">Quantity: </p>
                            <div className="flex px-3">
                              <button
                                onClick={() => dispatch(decrementQuantity(id))}
                              >
                                <svg
                                  className="fill-current text-gray-600 w-3"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                              </button>
                              <p className="mx-2 border text-center w-8">
                                {quantity}
                              </p>
                              <button
                                onClick={() => dispatch(incrementQuantity(id))}
                              >
                                <svg
                                  className="fill-current text-gray-600 w-3"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </dl>
                      <hr className="w-80 lg:w-96" />
                    </div>
                  </div>

                  <div>
                    <button
                      className="text-red-700 hover:text-red-500"
                      onClick={() => dispatch(removeItem(id))}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsDetail;
