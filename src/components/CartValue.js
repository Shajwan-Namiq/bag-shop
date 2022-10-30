import Total from "./Total";
import CardsDetail from "./CardsDetail";
import { useSelector } from "react-redux";
import Form from "./Form";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart bg-white ">
      <section>
        <div class="relative mx-auto max-w-screen-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2">
           
            <div className="cart__left mt-10">
              <div>
                <h3 className="text-center text-slate-900 font-bold text-lg">Shopping Cart</h3>
              
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

            <div className="cart__right mt-5">
              <Total />
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
