import { useRouter } from 'next/router';
import { useState } from 'react';
import * as ls from 'local-storage';

export default function ShoppingCart({ handleCart }: any) {
  const router = useRouter();

  const handleClick = () => {
    handleCart();
    ls.remove('shoppingCart');
    ls.set('shoppingCart', JSON.stringify(cart));
  };

  const handleCheckout = () => {
    alert('Your order is on its way! Thanks for shopping @ eMall');
  };

  let savedCartString: any = ls.get('shoppingCart');
  let savedCart;
  if (savedCartString) savedCart = JSON.parse(savedCartString);
  else savedCart = [];

  const [cart, setCart] = useState(savedCart);

  const removeItem = (index: number) => {
    const removedItem = cart.splice(index, 1);
    const updatedCart = cart.filter((prod: any) => prod.id !== removedItem.id);
    setCart(updatedCart);
  };

  return (
    <div
      className='relative z-10'
      aria-labelledby='slide-over-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
            <div className='pointer-events-auto w-screen max-w-md'>
              <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <h2
                      className='text-lg font-medium text-gray-900'
                      id='slide-over-title'
                    >
                      Shopping cart
                    </h2>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                        onClick={handleClick}
                      >
                        <span className='sr-only'>Close panel</span>

                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className='mt-8'>
                    <div className='flow-root'>
                      <ul
                        role='list'
                        className='-my-6 divide-y divide-gray-200'
                      >
                        {!cart.length ? (
                          <div>Your cart is empty</div>
                        ) : (
                          cart.length &&
                          cart.map((item: any, index: any) => (
                            <li className='flex py-6' key={index}>
                              <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                <img
                                  src={item.imageurl}
                                  alt={item.title}
                                  className='h-full w-full object-scale-down object-center'
                                />
                              </div>
                              <div className='ml-4 flex flex-1 flex-col'>
                                <div>
                                  <div className='flex justify-between text-base font-medium text-gray-900'>
                                    <h3>
                                      <a href='#'>{item.title}</a>
                                    </h3>
                                    <p className='ml-4'>${item.price}</p>
                                  </div>
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.origin}
                                  </p>
                                </div>
                                <div className='flex flex-1 items-end justify-between text-sm'>
                                  <p className='text-gray-500'>Qty 1</p>

                                  <div className='flex'>
                                    <button
                                      onClick={() => removeItem(index)}
                                      type='button'
                                      className='font-medium text-indigo-600 hover:text-indigo-500'
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                  <div className='flex justify-between text-base font-medium text-gray-900'>
                    <p>Subtotal</p>
                    <p>
                      $
                      {cart.reduce(
                        (acum: number, curr: any) => acum + curr.price,
                        0
                      )}
                    </p>
                  </div>
                  <p className='mt-0.5 text-sm text-gray-500'>
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className='mt-6'>
                    <button
                      onClick={handleCheckout}
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                    >
                      Checkout
                    </button>
                  </div>
                  <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                    <p>
                      or
                      <button
                        onClick={handleClick}
                        type='button'
                        className='font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        Continue Shopping
                        <span aria-hidden='true'> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
