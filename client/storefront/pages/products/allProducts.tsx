import { useQuery } from "@apollo/client";
import client from "../../apolo-client";
import Error from "../../src/components/Error";
import Loading from "../../src/components/Loading";
import NavBar from "../../src/components/NavBar";
import ProductCard from "../../src/components/ProductCard";
import { GET_PRODUCTS } from "../../src/graphql/queries/getProducts";
import { Products } from "../../src/__generated__/graphql";

export default function AllProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client: client });

  return (
    <div className='w-screen bg-gray-100 h-full'>
      <NavBar />
      <div className='w-screen flex flex-wrap'>
        {error ? (
          <Error error={error} />
        ) : loading ? (
          <Loading />
        ) : (
          data.getProducts.map(
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
