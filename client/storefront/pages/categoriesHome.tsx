import { useQuery } from '@apollo/client';
import Link from 'next/link';
import client from '../apolo-client';
import NavBar from '../src/components/NavBar';
import { GET_CATEGORIES } from '../src/queries/queries';
import { Categories, User } from '../src/__generated__/graphql';

function GetCategories() {
  const { error, loading, data } = useQuery(GET_CATEGORIES, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getCategories.map((cat: Categories) => (
    <div
      key={cat.id}
      className='rounded-md border-solid border-4 border-teal-400 w-1/5 h-12 align-middle flex justify-center items-center text-center m-5 font-bold'
    >
      <Link href={`/products/${cat.id}`}>{cat.name}</Link>
    </div>
  ));
}

export default function CategoriesHome() {
  return (
    <div className='flex flex-col items-center bg-gray-100 h-screen'>
      <NavBar />
      <h1 className='font-bold text-xl mt-5'>Select a category</h1>
      <GetCategories />
      <div className='rounded-md border-solid border-4 border-teal-400 w-1/5 h-12 align-middle flex justify-center items-center m-5 text-center font-bold'>
        <Link href={'/products/allProducts'}>All products</Link>
      </div>
    </div>
  );
}
