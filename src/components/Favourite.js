import { useSelector } from "react-redux";
//import Bag from "./image/bag.png";

function Favourite() {
  const cart = useSelector((state) => state.wishlist);

  return (
    <div className="cart bg-white py-20">
      <section>
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="cart__left lg:mt-5">
              <div>
                <h3 className="text-center text-slate-900 font-bold text-lg">
                  Shopping Cart
                </h3>

                <>
                  {cart?.map((item) => {
                    return (
                      <div key={item.id}>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <p>{item.category}</p>
                        <img src={item.image} alt="img" />
                      </div>
                    );
                  })}
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favourite;
