import * as ls from "local-storage";
import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";
import BackArrow from "../icons/backArrow";
import Stars from "../icons/stars";
import { Products } from "../__generated__/graphql";

export default function ProductDetail({
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
  const cartItem = {
    title,
    imageurl,
    price,
    origin,
    id,
  };

  const { user } = useAuth();
  const router = useRouter();

  const addToCart = () => {
    if (!user) {
      alert("Please log in to add items to your cart");
    } else {
      let cart: any = ls.get("shoppingCart");

      if (!cart) cart = [];
      else cart = JSON.parse(cart);

      cart.push(cartItem);

      ls.remove("shoppingCart");
      ls.set("shoppingCart", JSON.stringify(cart));
    }
  };

  const handleClick = () => {
    router.back();
  };

  return (
    <div className='py-6 w-full h-screen flex justify-center'>
      <div className='mt-4 flex w-10/12 bg-white shadow-lg rounded-lg overflow-hidden h-5/6'>
        <button onClick={handleClick}>
          <BackArrow />
        </button>
        <div className='w-7/12 flex flex-col justify-center items-center'>
          <img src={imageurl} className='object-scale-down h-3/4 w-10/12'></img>
        </div>
        <div className='m-8 w-5/12 p-4 flex flex-col justify-between'>
          <div>
            <h1 className='text-gray-900 font-bold text-2xl'>{title}</h1>
            <Stars avg_rating={avg_rating} />
            <p className='mt-1 text-gray-600 text-xs'>
              total votes: {reviews_count}
            </p>
            <div className='mt-8'>
              <p className='mt-2 text-gray-600 text-sm'>
                <b>Color:</b> {color}
              </p>
              <p className='mt-2 text-gray-600 text-sm'>
                <b>Origin: </b> {origin}
              </p>
              <p className='mt-2 text-gray-600 text-sm'>
                <b>Material: </b> {material}
              </p>
              <p className='mt-2 text-gray-600 text-sm'>
                <b>Weight: </b> {weight}
              </p>
              <p className='mt-2 text-gray-600 text-sm'>
                <b>Dimensions: </b>
                {dimensions}
              </p>
            </div>
          </div>
          <div className='flex flex-col item-center justify-center items-center mt-3'>
            <h1 className='text-gray-700 font-bold text-xl'>${price}</h1>
            <button
              onClick={addToCart}
              className='w-full px-3 py-2 mt-4 bg-gray-800 text-white text-xs font-bold uppercase rounded active:shadow-lg active:bg-gray-500 transition duration-150 ease-in-out'
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
