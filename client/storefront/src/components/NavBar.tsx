import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='flex bg-black w-full h-20 items-center justify-between'>
      <h2 className='text-teal-300 ml-10'>eMall</h2>
      <div className='w-3/5 flex justify-start'>
        <Link href='/categories'>
          <h2 className='text-white m-10'>Categories</h2>
        </Link>
        <Link href='/products/allProducts'>
          <h2 className='text-white m-10'>Products</h2>
        </Link>
      </div>
    </div>
  );
}
