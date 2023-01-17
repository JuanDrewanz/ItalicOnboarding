import { useQuery } from "@apollo/client";
import client from "../../apolo-client";
import ProductCard from "../../src/components/ProductCard";
import { useRouter } from "next/router";
import NavBar from "../../src/components/NavBar";
import { Products } from "../../src/__generated__/graphql";
import Error from "../../src/components/Error";
import Loading from "../../src/components/Loading";
import { GET_PRODUCTS_BY_CAT } from "../../src/graphql/queries/getProducts";

export default function ProductsByCat() {
  const router = useRouter();
  const { catId }: any = router.query;
  const category = parseInt(catId);

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CAT, {
    client: client,
    variables: { catId: category },
  });

  return (
    <div className='w-screen bg-gray-100 h-full'>
      <NavBar />
      <div className='flex flex-wrap h-screen'>
        {error ? (
          <Error error={error} />
        ) : loading ? (
          <Loading />
        ) : (
          data.getProductsByCat.map(
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
