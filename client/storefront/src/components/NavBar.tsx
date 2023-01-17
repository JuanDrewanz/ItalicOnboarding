import Link from "next/link";
import SearchBar from "./SearchBar";
import { useAuth } from "../context/authContext";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import ProfileMenu from "./ProfileMenu";
import Cart from "../icons/cart";

export default function NavBar() {
  const [showCart, setShowCart] = useState(false);
  const { user } = useAuth();

  const toggleCart = () => {
    if (showCart) setShowCart(false);
    else setShowCart(true);
  };

  return (
    <div className='flex bg-black w-full h-20 items-center justify-between'>
      <div className='w-1/5 flex items-center'>
        <h2 className='text-teal-300 text-xl m-10'>eMall</h2>
        <Link href='/CategoriesHome'>
          <h2 className='text-white m-6'>Categories</h2>
        </Link>
        <Link href='/products/allProducts'>
          <h2 className='text-white m-6'>Products</h2>
        </Link>
      </div>
      <div className='flex flex-row items-center w-3/5 justify-between'>
        <SearchBar />
        <div className='flex flex-row items-center'>
          <button className='text-white m-5' onClick={toggleCart}>
            <Cart />
          </button>
          {user ? (
            <ProfileMenu />
          ) : (
            <Link className='text-white m-5' href={"/login"}>
              <h2>Login</h2>
            </Link>
          )}
          {showCart ? <ShoppingCart handleCart={toggleCart} /> : ""}
        </div>
      </div>
    </div>
  );
}
