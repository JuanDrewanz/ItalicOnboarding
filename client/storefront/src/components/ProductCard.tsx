import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ProductCard({
  id,
  title,
  price,
  imageurl,
  avg_rating,
}) {
  const router = useRouter();
  function redirect(id) {
    router.push(`/products/detail/${id}`);
  }

  return (
    <div className='py-6 m-6 h-300 w-2/7'>
      <div className='flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='w-2/5'>
          <img src={imageurl} width='150px' height='180px'></img>
        </div>
        <div className='w-2/3 p-4'>
          <h1 className='text-gray-900 font-bold text-2xl'>{title}</h1>
          <p className='mt-2 text-gray-600 text-sm'>
            Lorem ipsum dolor sit amet
          </p>
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
          <div className='flex item-center justify-between mt-3'>
            <h1 className='text-gray-700 font-bold text-xl'>${price}</h1>
            <button
              onClick={() => redirect(id)}
              className='px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded'
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
