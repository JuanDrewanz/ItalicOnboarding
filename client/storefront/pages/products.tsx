import { useQuery } from '@apollo/client';
import client from '../apolo-client';
import ProductCard from '../src/components/ProductCard';
import { GET_PRODUCTS } from '../src/queries/queries';

function GetProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getProducts.map(({ id, category, title, price, imageurl }) => (
    <ProductCard title={title} price={price} imageurl={imageurl} />
  ));
}

export default function Products() {
  return (
    <div className='w-screen flex-wrap'>
      <h1>Products</h1>
      <div>
        <GetProducts />
        {/* <ProductCard title='remera' />
        <ProductCard title='campera' />
        <ProductCard title='mochila' /> */}
      </div>
    </div>
  );
}
