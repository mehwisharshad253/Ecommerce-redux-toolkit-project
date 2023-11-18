import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Headers = () => {
  const {carts}=useSelector((state)=>state.allCart);
  console.log(carts)
  return (
    <div>
      <nav className='bg-black text-white h-16 flex flex-wrap justify-between items-center md:flex-no-wrap'>
        <Link to='/' className='mr-5 relative no-underline'><div className='ml-5 text-lg font-bold'>Ecommerce</div></Link>
        <Link to='/cart' className='mr-5 relative no-underline'>
        <div className='mr-5 relative'>
          <FontAwesomeIcon icon={faShoppingCart} className='h-8' />
          {carts.length > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 text-xs'>
              {carts.length}
            </span>
          )}
        </div>
        </Link>
      </nav>
    </div>
  );
};

export default Headers;
