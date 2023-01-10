export default function ProductDetail({
  title,
  avg_rating,
  category,
  id,
  price,
  imageurl,
  reviews_count,
  color,
  dimensions,
  material,
  origin,
  weight,
}) {
  return (
    <div className='py-6 w-full h-screen flex justify-center'>
      <div className='mt-4 flex w-10/12 bg-white shadow-lg rounded-lg overflow-hidden h-5/6'>
        <div className='w-7/12 flex flex-col justify-center items-center'>
          <img src={imageurl} className='object-scale-down h-3/4 w-10/12'></img>
        </div>
        <div className='m-8 w-5/12 p-4 flex flex-col justify-between'>
          <div>
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
              <p>{avg_rating}</p>
            </div>
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
            <button className='w-full px-3 py-2 mt-4 bg-gray-800 text-white text-xs font-bold uppercase rounded'>
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
