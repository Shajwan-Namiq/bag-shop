import Total from "./Total";
import CardsDetail from "./CardsDetail";
import { useSelector } from "react-redux";
import  Form from "./Form";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart bg-white">
      
      <div className="cart__left">
        <div>
          <h3 className="text-center p-2 text-lg">Shopping Cart</h3>
          {cart?.map((item) => (
            <>
              <CardsDetail
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
                rating={item.rating}
                category={item.category}
                quantity={item.quantity}
              />
              
            </>
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Total />
        <Form />
      </div>
    </div>
  );
}

export default Cart;
