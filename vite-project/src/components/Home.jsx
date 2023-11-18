import React from 'react';
import {addToCart} from '../features/cartSlice'
import {useDispatch ,useSelector} from 'react-redux'
import toast from 'react-hot-toast';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.app);

  const send=(e)=>{
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart")
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-800 uppercase mb-4 border-b-2 pb-2">
      GadgetGalaxy Hub
      </h1>
      <div className="container mx-auto flex flex-wrap -m-4">
        {products.Products.map((elem, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={elem.thumbnail}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {elem.brand}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {elem.description.slice(0,50)}...
              </h2>
              <p className="mt-1">{elem.price}</p>
            </div>
            <div className='flex justify-center'>
              <button onClick={()=>send(elem)} className='bg-blue-600 text-white font-bold text-lg p-2 border-2 rounded'>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
