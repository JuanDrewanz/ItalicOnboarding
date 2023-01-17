import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import client from '../../apolo-client';
import { useAuth } from '../context/authContext';
import { REGISTER_USER } from '../queries/queries';
import * as ls from 'local-storage';

export default function RegisterUser() {
  const router = useRouter();
  const { login, user } = useAuth();
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    client: client,
    onCompleted: async function (data) {
      ls.set<String>('token', data.registerUser.token);
      login({
        token: data.registerUser.token,
        email: data.registerUser.email,
      });
      router.push('/CategoriesHome');
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
