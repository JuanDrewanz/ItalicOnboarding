import Link from 'next/link';
import LoginUser from '../src/components/LoginUser';

export default function login() {
  return (
    <section className='h-full gradient-form bg-gray-900 md:h-screen'>
      <div className='container py-12 px-6 h-full'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <div className='xl:w-10/12'>
            <div className='block bg-white shadow-lg rounded-lg'>
              <div className='lg:flex lg:flex-wrap g-0'>
                <div className='lg:w-6/12 px-4 md:px-0'>
                  <div className='md:p-12 md:mx-6'>
                    <div className='text-center'>
                      <img
                        className='mx-auto w-48'
                        src='https://cdn-icons-png.flaticon.com/512/641/641813.png'
                        alt='logo'
                      />
                      <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                        Welcome to eMall
                      </h4>
                    </div>
                    <LoginUser />
                    <div className='flex items-center justify-between pb-6'>
                      <p className='mb-0 mr-2'>Don't have an account?</p>
                      <Link
                        href='/register'
                        type='button'
                        className='inline-block px-6 py-2 border-2 border-teal-800 text-teal-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='bg-teal-800 lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none'>
                  <div className='text-white px-4 py-6 md:p-12 md:mx-6'>
                    <h4 className='text-xl font-semibold mb-6'>
                      We are more than just an electronic store
                    </h4>
                    <p className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
