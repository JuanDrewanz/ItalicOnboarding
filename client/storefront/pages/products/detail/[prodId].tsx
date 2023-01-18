import client from "../../../apolo-client";
import NavBar from "../../../src/components/NavBar";
import ProductDetail from "../../../src/components/ProductDetail";
import { GET_PRODUCT_BY_ID } from "../../../src/graphql/queries/getProducts";

export default function DetailHome({
  title,
  avg_rating,
  category_id,
  id,
  price,
  imageurl,
  reviews_count,
  color,
  dimensions,
  material,
  origin,
  weight,
}: any) {
  return (
    <div className='flex flex-col w-screen h-screen'>
      <NavBar />
      <ProductDetail
        title={title}
        avg_rating={avg_rating}
        category_id={category_id}
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

export async function getServerSideProps({ params }: any) {
  console.log("los params son", params);
  const { data } = await client.query({
    query: GET_PRODUCT_BY_ID,
    variables: { prodId: parseInt(params.prodId) },
  });

  return {
    props: {
      title: data.getProductById.title,
      avg_rating: data.getProductById.avg_rating,
      category_id: data.getProductById.category_id,
      id: data.getProductById.id,
      price: data.getProductById.price,
      imageurl: data.getProductById.imageurl,
      reviews_count: data.getProductById.reviews_count,
      color: data.getProductById.specifications.color,
      dimensions: data.getProductById.specifications.dimensions,
      material: data.getProductById.specifications.material,
      origin: data.getProductById.specifications.origin,
      weight: data.getProductById.specifications.weight,
    },
  };
}
