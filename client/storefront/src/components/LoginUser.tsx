import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import client from "../../apolo-client";
import { useAuth } from "../context/authContext";
import { LOGIN_USER } from "../queries/queries";
import * as ls from "local-storage";
import Error from "./Error";
import Loading from "./Loading";

export default function LoginUser() {
  const { login, user, logout } = useAuth();
  const router = useRouter();

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    client: client,
    onCompleted: async function (data) {
      ls.set<String>("token", data.loginUser.token);
      login({ token: data.loginUser.token, email: data.loginUser.email });
      router.push("/CategoriesHome");
    },
  });

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser({
        variables: {
          user: newUser,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form>
      <p className='mb-1'>Please login to your account</p>
      <div className='mb-4'>
        <input
          type='text'
          name='email'
          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='exampleFormControlInput1'
          placeholder='E-mail'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='mb-4'>
        <input
          type='password'
          name='password'
          className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          id='exampleFormControlInput1'
          placeholder='Password'
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className='text-center pt-1 mb-4 pb-1'>
        <button
          onClick={(e) => handleClick(e)}
          className='bg-teal-700 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
          type='button'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          Log in
        </button>
      </div>
      {error ? <Error error={error} /> : loading ? <Loading /> : ""}
    </form>
  );
}
