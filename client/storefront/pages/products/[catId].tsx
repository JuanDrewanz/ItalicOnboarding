import { useQuery } from '@apollo/client';
import client from '../../apolo-client';
import ProductCard from '../../src/components/ProductCard';
import { GET_PRODUCTS_BY_CAT } from '../../src/queries/queries';
import { useRouter } from 'next/router';
import NavBar from '../../src/components/NavBar';

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

function GetProducts({ catId }) {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CAT, {
    client: client,
    variables: { catId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data, loading, error);

  return data.getProductsByCat.map(({ title, price, imageurl }) => (
    <ProductCard title={title} price={price} imageurl={imageurl} />
  ));
}

export default function Products() {
  const router = useRouter();
  const { catId } = router.query;
  const category = parseInt(catId);

  return (
    <div className='w-screen flex-wrap'>
      <NavBar />
      <h1>Products</h1>
      <div>
        <GetProducts catId={category} />
      </div>
    </div>
  );
}
