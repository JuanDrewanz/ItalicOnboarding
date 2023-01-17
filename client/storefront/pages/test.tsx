import { useQuery } from "@apollo/client";
import client from "../apolo-client";
import { GET_PRODUCTS } from "../src/queries/queries";
import { Products } from "../src/__generated__/graphql";

function GetProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getProducts.map(({ id, category_id, title, price }: Products) => (
    <div key={id}>
      <h3>{title}</h3>
      <br />
      <b>About this product:</b>
      <p>{category_id}</p>
      <p>{price}</p>
      <br />
    </div>
  ));
}

export default function test() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      <GetProducts />
    </div>
  );
}
