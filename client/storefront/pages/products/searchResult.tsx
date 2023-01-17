import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import client from "../../apolo-client";
import Error from "../../src/components/Error";
import Loading from "../../src/components/Loading";
import NavBar from "../../src/components/NavBar";
import ProductCard from "../../src/components/ProductCard";
import { SEARCH_PRODUCT } from "../../src/graphql/queries/searchProducts";
import { Products } from "../../src/__generated__/graphql";

export default function SearchResult() {
  const router = useRouter();
  const { title } = router.query;
  const { error, loading, data } = useQuery(SEARCH_PRODUCT, {
    client: client,
    variables: { title: title },
  });

  return (
    <div className='w-screen bg-gray-100 h-screen'>
      <NavBar />
      <div className='w-screen flex flex-wrap'>
        {error ? (
          <Error error={error} />
        ) : loading ? (
          <Loading />
        ) : (
          data.searchProduct.map(
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
          )
        )}
      </div>
    </div>
  );
}
