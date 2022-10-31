  
import { useSelector } from "react-redux";

function Total() {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className="p-5  text-gray-600 ">
      <h2 className="text-lg mb-2 "> </h2>
      <div className="flex justify-center">
        <p className="total__p">
          Total (
          <span className="text-red-600">{getTotal().totalQuantity} Items</span>
          ) :{" "}
          <strong className="text-[#ffba08]">${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  );
}

export default Total;