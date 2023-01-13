import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import client from '../../apolo-client';
import NavBar from '../../src/components/NavBar';
import ProductCard from '../../src/components/ProductCard';
import { SEARCH_PRODUCT } from '../../src/queries/queries';

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

function SearchProducts({ search }) {
  const { error, loading, data } = useQuery(SEARCH_PRODUCT, {
    client: client,
    variables: { title: search },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.searchProduct.map(
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

export default function SearchResult() {
  const router = useRouter();
  const { title } = router.query;

  return (
    <div className='w-screen bg-gray-100 h-screen'>
      <NavBar />
      <div className='w-screen flex flex-wrap'>
        <SearchProducts search={title} />
      </div>
    </div>
  );
}
