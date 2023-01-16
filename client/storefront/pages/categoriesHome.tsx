import { useQuery } from '@apollo/client';
import Link from 'next/link';
import client from '../apolo-client';
import NavBar from '../src/components/NavBar';
import Arrow from '../src/icons/arrow';
import { GET_CATEGORIES } from '../src/queries/queries';
import { Categories, User } from '../src/__generated__/graphql';

export default function CategoriesHome() {
  const { error, loading, data } = useQuery(GET_CATEGORIES, { client: client });

  return (
    <div className='flex flex-col items-center bg-gray-100 h-screen'>
      <NavBar />
      <h1 className='font-bold text-xl mt-8 mb-5'>Select a category</h1>
      {data.getCategories.map((cat: Categories) => (
        <Link
          href={`/products/${cat.id}`}
          className='relative inline-flex m-4 items-center px-12 py-3 overflow-hidden text-lg font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:text-white group hover:bg-gray-50'
        >
          <span className='absolute left-0 block w-full h-0 transition-all bg-teal-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
          <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
            <Arrow />
          </span>
          <span className='relative w-52 text-center'>{cat.name}</span>
        </Link>
      ))}
      <Link
        href={'/products/allProducts'}
        className='relative inline-flex m-4 items-center px-12 py-3 overflow-hidden text-lg font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:text-white group hover:bg-gray-50'
      >
        <span className='absolute left-0 block w-full h-0 transition-all bg-teal-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
        <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
          <Arrow />
        </span>
        <span className='relative w-52 text-center'>All Products</span>
      </Link>
    </div>
  );
}
