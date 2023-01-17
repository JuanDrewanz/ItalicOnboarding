import Link from "next/link";
import { Products } from "../__generated__/graphql";

export default function ProductCard({
  id,
  title,
  price,
  imageurl,
  avg_rating,
}: Products) {
  return (
    <div className='py-6 m-6 w-128'>
      <div className='flex w-full bg-white shadow-lg rounded-lg overflow-hidden h-64'>
        <div className='w-2/5 p-2 flex justify-center items-center h-full'>
          {imageurl ? (
            <img src={imageurl} className='object-scale-down h-48 w-48'></img>
          ) : (
            ""
          )}
        </div>
        <div className='w-2/3 p-4 flex flex-col justify-between'>
          <div className='flex flex-col'>
            <h1 className='text-gray-900 font-bold text-2xl'>{title}</h1>
            <div className='flex item-center mt-2'>
              <svg
                className='w-5 h-5 fill-current text-gray-700'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
              <svg
                className='w-5 h-5 fill-current text-gray-700'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
              <svg
                className='w-5 h-5 fill-current text-gray-700'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
              <svg
                className='w-5 h-5 fill-current text-gray-500'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
              <svg
                className='w-5 h-5 fill-current text-gray-500'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
              <p className='text-sm fill-current text-gray-500'>{avg_rating}</p>
            </div>
            <p className='mt-2 text-gray-600 text-sm'>
              12-Month eMall warranty
            </p>
          </div>
          <div className='flex item-center justify-between mt-3'>
            <h1 className='text-gray-700 font-bold text-xl'>${price}</h1>
            <Link
              href={`/products/detail/${id}`}
              className='px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded'
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
