import { useQuery } from '@apollo/client';
import client from '../apolo-client';
import { GET_PRODUCTS } from '../src/queries/queries';

function GetProducts() {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client: client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getProducts.map(({ id, category, title, price }) => (
    <div key={id}>
      <h3>{title}</h3>
      <br />
      <b>About this product:</b>
      <p>{category}</p>
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
