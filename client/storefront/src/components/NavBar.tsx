import Link from 'next/link';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <div className='flex bg-black w-full h-20 items-center justify-between'>
      <div className='w-1/5 flex'>
        <h2 className='text-teal-300 ml-10'>eMall</h2>
      </div>
      <div className='w-3/5 flex justify-center'>
        <Link href='/categories'>
          <h2 className='text-white m-10'>Categories</h2>
        </Link>
        <Link href='/products/allProducts'>
          <h2 className='text-white m-10'>Products</h2>
        </Link>
      </div>
      <div className='flex flex-row'>
        <SearchBar />
        <Link className='text-white m-10' href={'/login'}>
          <h2>Login</h2>
        </Link>
      </div>
    </div>
  );
}
