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

  return data.getProductsByCat.map(
    ({ id, title, price, imageurl, avg_rating }) => (
      <ProductCard
        key={id}
        id={id}
        title={title}
        price={price}
        imageurl={imageurl}
        avg_rating={avg_rating}
      />
    )
  );
}

export default function Products() {
  const router = useRouter();
  const { catId } = router.query;
  const category = parseInt(catId);

  return (
    <div className='w-screen bg-gray-100 h-full'>
      <NavBar />
      <div className='flex flex-wrap h-screen'>
        <GetProducts catId={category} />
      </div>
    </div>
  );
}
