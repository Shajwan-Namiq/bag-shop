
import CardsDetail from "./CardsDetail";
import { useSelector } from "react-redux";
import Bag from "./image/bag.png";
import Total from "./Total";
 
function CartValue() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart bg-white dark:text-white dark:bg-slate-900 py-20">
      <section>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="cart__left lg:mt-5">
              <div>
                <h3 className="text-center text-slate-900 dark:text-white dark:bg-slate-900 font-bold text-lg">
                  Shopping Cart
                </h3>

                {cart.length === 0 ? (
                  <div className="animate-bounce empty-cart mt-32 relative flex justify-center">
                    <span className="absolute font-bold text-2xl text-red-500 bottom-20  ">
                      The Cart Is Empty
                    </span>
                    <img src={Bag} alt="" />
                  </div>
                ) : (
                  <>
                    {cart.map((item) => (
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
                  </>
                )}
              </div>
            </div>

            <div className="cart__right mt-5 mx-5 ">
              <Total />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartValue;
