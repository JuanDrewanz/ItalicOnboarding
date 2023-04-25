import client from "../../apolo-client";
import NavBar from "../../src/components/NavBar";
import ProductCard from "../../src/components/ProductCard";
import { GET_PRODUCTS } from "../../src/graphql/queries/getProducts";
import { Products } from "../../src/__generated__/graphql";

export default function AllProducts({ data }: any) {
  return (
    <div className='w-screen bg-gray-100 h-full'>
      <NavBar />
      <div className='w-screen flex flex-wrap'>
        {data.getProducts.map(
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
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  return {
    props: {
      data,
    },
  };
}
