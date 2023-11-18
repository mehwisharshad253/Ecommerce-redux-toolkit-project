import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {useSelector,useDispatch} from 'react-redux'
import { addToCart, removeToCart, removeSingleItem ,emptyCart} from '../features/cartSlice';
import toast from 'react-hot-toast';

const CartDetails = () => {
  const [totalprice,setPrice]=useState(0);
  const [totalquantity,setQuantity]=useState(0);
  const {carts}=useSelector((state)=>state.allCart);
  console.log(carts)

  const dispatch=useDispatch();

//  add to carts
const handleIncrement=(e)=>{
  dispatch(addToCart(e));
}

//remove to cart
const handleDecrement=(e)=>{
  dispatch(removeToCart(e));
  toast.success("Item remove From Your Cart")
}

//remove Single Cart
const handleSingleDecrement=(e)=>{
  dispatch(removeSingleItem(e));
}

// empty cart
const handleEmptyCart=()=>{
  dispatch(emptyCart());
  toast.success("Your Cart Is Empty")
}

//count total price
const total=()=>{
  let totalprice=0;
  carts.map((ele,index)=>{
    totalprice=ele.price * ele.qnty + totalprice;
  })
  setPrice(totalprice);
}

//count total quantity
const totalQuantity=()=>{
  let totalquantity=0;
  carts.map((ele,index)=>{
    totalquantity=ele.qnty + totalquantity;
  })
  setQuantity(totalquantity);
}

useEffect(()=>{
total();
},[total])


useEffect(()=>{
totalQuantity();
},[totalQuantity])



  return (
    <div className='min-h-screen flex flex-col items-center mt-20 bg-gray-100'>
      <nav className='bg-black text-white w-full md:w-8/12 lg:w-7/12 xl:w-6/12 flex items-center justify-between py-4 px-6'>
        <div className='text-xl'>Cart calculation ({carts.length})</div>
        {carts.length > 0 && (
          <button onClick={handleEmptyCart} className='bg-blue-600 text-white py-2 px-4 rounded'>
            <FontAwesomeIcon icon={faTrash} /> Empty Cart
          </button>
        )}
      </nav>

      <div className='bg-white w-full md:w-8/12 lg:w-7/12 xl:w-6/12 flex flex-col justify-center items-center p-4 shadow-md mt-4 overflow-auto'>
        {carts.length === 0 ? (
          <div className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faShoppingCart} className='text-4xl text-gray-400 mb-2' />
            <p className='text-gray-600'>Your Cart is Empty</p>
          </div>
        ) : (
          <table className='lg:w-full md:6/12 sm:w-2/12 table-auto'>
            <thead>
              <tr className='bg-gray-800 text-white'>
                <th className='py-2 px-4'>Action</th>
                <th className='py-2 px-4'>Products</th>
                <th className='py-2 px-4'>Name</th>
                <th className='py-2 px-4'>Price</th>
                <th className='py-2 px-4'>Qty</th>
                <th className='py-2 px-4'>Total Amount</th>
              </tr>
            </thead>
            <tbody>
            {carts.map((cartItem) => (
                <tr key={cartItem.id} className='border-b'>
                  <td className='py-2 px-4 text-center'>
                    <button onClick={()=>handleDecrement(cartItem.id)} className='bg-red-500 text-white py-2 px-4 rounded'>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                  <td className='py-2 px-4 text-center'>
                    <img src={cartItem.thumbnail} alt={cartItem.brand} className='w-12 h-12 object-cover' />
                  </td>
                  <td className='py-2 px-4 text-center'>{cartItem.brand}</td>
                  <td className='py-2 px-4 text-center'>{`${cartItem.price.toFixed(2)}`}</td>
                  <td className='py-2 px-4 md:px-6 text-center'>
                    <div className='flex items-center justify-center'>
                      <button onClick={cartItem.qnty <=1? ()=>handleDecrement(cartItem.id) :()=>handleSingleDecrement(cartItem)} className='bg-blue-500 text-white py-2 px-4 rounded-l-md mr-2'>
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <h1 className='mx-2 md:mx-4 text-xl'>{cartItem.qnty}</h1>
                      <button onClick={()=>handleIncrement(cartItem)} className='bg-green-500 text-white py-2 px-4 rounded-r-md'>
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </td>
                  <td className='py-2 px-4 text-center'>{`${(cartItem.price * cartItem.qnty).toFixed(2)}`}</td>
                </tr>
              ))}

            </tbody>
            <tfoot className='text-end'>
              <tr>
                <th colSpan={4}>&nbsp;</th>
                <th colSpan={2}>Items In Cart <span>:</span><span className='text-red-400'>{totalquantity}</span>
                <br/>
                Total Price <span>:</span><span className='text-red-400'>{totalprice}</span></th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
