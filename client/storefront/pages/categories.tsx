import { useQuery } from '@apollo/client';
import Link from 'next/link';
import client from '../apolo-client';
import NavBar from '../src/components/NavBar';
import { GET_CATEGORIES } from '../src/queries/queries';

function GetCategories() {
  const { error, loading, data } = useQuery(GET_CATEGORIES, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getCategories.map((cat) => (
    <div className='rounded-md border-solid border-4 border-teal-400 w-1/5 h-50 text-center m-5 font-bold'>
      <Link href={`/products/${cat.id}`}>{cat.name}</Link>
    </div>
  ));
}

export default function Categories() {
  return (
    <div className='flex flex-col h-fit justify-center items-center bg-gray-200'>
      <NavBar />
      <h1 className='font-bold text-xl mt-5'>Select a category</h1>
      <GetCategories />
      <div className='rounded-md border-solid border-4 border-teal-400 w-1/5 h-50 m-5 text-center font-bold'>
        <Link href={'/products/allProducts'}>All products</Link>
      </div>
    </div>
  );
}
