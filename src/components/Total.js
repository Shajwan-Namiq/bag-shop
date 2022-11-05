  import Checkout from "./Checkout";
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
    
          <Checkout
            quantity={getTotal().totalQuantity}
            price={getTotal().totalPrice}
          />
          
       
  );
}

export default Total;