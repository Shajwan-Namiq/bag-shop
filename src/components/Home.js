import React from 'react'
import Cart from './Cart'
 import data from '../data';

function Home() {
    
  return (
    <div className="bg-white">
      <h1 className="pt-8 text-center">Add to Cart Projects</h1>

      <div className="mt-8 px-5 lg:px-16  grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-3">
        {data.map((item) => {
            return (
              <>
                <Cart
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  description={item.description}
                  category={item.category}
                  rating={item.rating}
                />
              </>
            );
        })}
     
       
      </div>
    </div>
  );
}

export default Home