import client from "../../apolo-client";
import ProductCard from "../../src/components/ProductCard";
import NavBar from "../../src/components/NavBar";
import { Products } from "../../src/__generated__/graphql";
import { GET_PRODUCTS_BY_CAT } from "../../src/graphql/queries/getProducts";

export default function ProductsByCat({ data }: any) {
  return (
    <div className='w-screen bg-gray-100 h-full'>
      <NavBar />
      <div className='flex flex-wrap h-screen'>
        {data.getProductsByCat.map(
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

export async function getServerSideProps({ params }: any) {
  const { data } = await client.query({
    query: GET_PRODUCTS_BY_CAT,
    variables: { catId: parseInt(params.catId) },
  });

  return {
    props: {
      data,
    },
  };
}
