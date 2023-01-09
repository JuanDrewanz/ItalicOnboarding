import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../../../apolo-client';
import NavBar from '../../../src/components/NavBar';
import ProductDetail from '../../../src/components/ProductDetail';
import { GET_PRODUCT_BY_ID } from '../../../src/queries/queries';

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

function GetDetails({ prodId }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    client: client,
    variables: { prodId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { title, avg_rating, category, id, price, imageurl, reviews_count } =
    data.getProductById;

  const { color, dimensions, material, origin, weight } =
    data.getProductById.specifications;
  return (
    <div>
      <ProductDetail
        title={title}
        avg_rating={avg_rating}
        category={category}
        id={id}
        price={price}
        imageurl={imageurl}
        reviews_count={reviews_count}
        color={color}
        dimensions={dimensions}
        material={material}
        origin={origin}
        weight={weight}
      />
    </div>
  );
}

export default function DetailHome() {
  const router = useRouter();
  const { prodId } = router.query;
  const prodId_int: number = parseInt(prodId);

  console.log('pord id', prodId);
  console.log('prodId_int', prodId_int);

  return (
    <div className='justify-center flex flex-col w-screen'>
      <NavBar />
      <GetDetails prodId={prodId_int} />
    </div>
  );
}
