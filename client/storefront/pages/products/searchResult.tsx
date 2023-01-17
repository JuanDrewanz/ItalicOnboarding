import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import client from "../../apolo-client";
import NavBar from "../../src/components/NavBar";
import ProductCard from "../../src/components/ProductCard";
import { SEARCH_PRODUCT } from "../../src/queries/queries";
import { Products } from "../../src/__generated__/graphql";

// feedback: not sure what this is doing?
export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

// feedback: function doesn't really serve any purpose
function SearchProducts({ search }: any) {
  const { error, loading, data } = useQuery(SEARCH_PRODUCT, {
    client: client,
    variables: { title: search },
  });

  // feedback: would have preferred a shared loading and error UI instead of hardcoding everywhere
  // even if it's just plain text
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.searchProduct.map(
    ({ id, title, price, imageurl, avg_rating }: Products) => (
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
    <div className="w-screen bg-gray-100 h-screen">
      <NavBar />
      <div className="w-screen flex flex-wrap">
        <SearchProducts search={title} />
      </div>
    </div>
  );
}
