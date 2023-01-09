import { useQuery } from '@apollo/client';
import client from '../../apolo-client';
import NavBar from '../../src/components/NavBar';
import ProductCard from '../../src/components/ProductCard';
import { GET_PRODUCTS } from '../../src/queries/queries';

function GetProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getProducts.map(({ id, title, price, imageurl, avg_rating }) => (
    <ProductCard
      id={id}
      title={title}
      price={price}
      imageurl={imageurl}
      avg_rating={avg_rating}
    />
  ));
}

export default function Products() {
  return (
    <div className='w-screen'>
      <NavBar />
      <div className='w-screen flex flex-wrap'>
        <GetProducts />
      </div>
    </div>
  );
}
