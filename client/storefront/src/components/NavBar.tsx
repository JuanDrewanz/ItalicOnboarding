import Link from 'next/link';
import SearchBar from './SearchBar';
import { useAuth } from '../context/authContext';
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import ProfileMenu from './ProfileMenu';

export default function NavBar() {
  const [shopCart, setShopCart] = useState(false);
  const { user } = useAuth();
  console.log(user);

  const handleCart = () => {
    if (shopCart) setShopCart(false);
    else setShopCart(true);
  };

  return (
    <div className='flex bg-black w-full h-20 items-center justify-between'>
      <div className='w-1/5 flex items-center'>
        <h2 className='text-teal-300 text-xl m-10'>eMall</h2>
        <Link href='/categoriesHome'>
          <h2 className='text-white m-6'>Categories</h2>
        </Link>
        <Link href='/products/allProducts'>
          <h2 className='text-white m-6'>Products</h2>
        </Link>
      </div>
      <div className='flex flex-row items-center w-3/5 justify-between'>
        <SearchBar />
        <div className='flex flex-row items-center'>
          <button className='text-white m-5' onClick={handleCart}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='32'
              width='32'
              viewBox='0 0 32 32'
            >
              <title>cart</title>
              <rect
                data-element='frame'
                x='0'
                y='0'
                width='32'
                height='32'
                rx='7'
                ry='7'
                stroke='none'
                fill='#4db6ac'
              ></rect>
              <g
                transform='translate(6.4 6.4) scale(0.6)'
                fill='#ffffff'
                className='nc-icon-wrapper'
              >
                <circle data-color='color-2' cx='5' cy='29' r='3'></circle>{' '}
                <circle data-color='color-2' cx='27' cy='29' r='3'></circle>{' '}
                <path
                  fill='#ffffff'
                  d='M31,22H2.767l1.8-3H24c0.414,0,0.785-0.255,0.934-0.641l5-13c0.118-0.308,0.077-0.653-0.109-0.925 C29.638,4.162,29.329,4,29,4H4.5L1.8,0.4C1.469-0.042,0.842-0.133,0.4,0.2c-0.442,0.331-0.532,0.958-0.2,1.4L3,5.333v12.39 l-2.857,4.762c-0.186,0.309-0.19,0.694-0.013,1.007S0.64,24,1,24h30c0.553,0,1-0.448,1-1S31.553,22,31,22z'
                ></path>
              </g>
            </svg>
          </button>
          {user ? (
            <ProfileMenu />
          ) : (
            <Link className='text-white m-5' href={'/login'}>
              <h2>Login</h2>
            </Link>
          )}
          {shopCart ? <ShoppingCart handleCart={handleCart} /> : ''}
        </div>
      </div>
    </div>
  );
}
