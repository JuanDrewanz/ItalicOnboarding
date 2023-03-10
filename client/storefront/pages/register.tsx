import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { consumers } from 'stream';
import client from '../apolo-client';
import { REGISTER_USER } from '../src/queries/queries';
import { useAuth } from '../src/context/authContext';

function RegisterUser() {
  const router = useRouter();
  const { login, user } = useAuth();
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    client: client,
    onCompleted: async function (data) {
      localStorage.setItem('token', data.registerUser.token);
      login({
        token: data.registerUser.token,
        email: data.registerUser.email,
      });
      router.push('/categoriesHome');
    },
  });

  const [newUser, setNewUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleChange = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await registerUser({
        variables: {
          user: newUser,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <form>
        <p className='mb-4'>Please register to enjoy unlimited benefits</p>
        <div className='mb-4'>
          <input
            value={newUser.email}
            name='email'
            type='text'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleFormControlInput1'
            placeholder='E-mail'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-4'>
          <input
            value={newUser.username}
            name='username'
            type='text'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleFormControlInput1'
            placeholder='Username'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='mb-4'>
          <input
            value={newUser.password}
            name='password'
            type='password'
            className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            id='exampleFormControlInput1'
            placeholder='Password'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='text-center pt-1 mb-12 pb-1'>
          <button
            onClick={(e) => handleClick(e)}
            className='bg-teal-700 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
            type='button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default function register() {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/login');
  };

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
                    <RegisterUser />
                    <div className='flex items-center justify-between pb-6'>
                      <p className='mb-0 mr-2'>Already have an account?</p>
                      <button
                        onClick={(e) => handleClick(e)}
                        type='button'
                        className='inline-block px-6 py-2 border-2 border-teal-800 text-teal-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Sign in
                      </button>
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
