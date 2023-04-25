export default function CartItem({ item, index, removeItem }: any) {
  return (
    <li className='flex py-6' key={index}>
      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
        <img
          src={item.imageurl}
          alt={item.title}
          className='h-full w-full object-scale-down object-center'
        />
      </div>
      <div className='ml-4 flex flex-1 flex-col'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <a href='#'>{item.title}</a>
            </h3>
            <p className='ml-4'>${item.price}</p>
          </div>
          <p className='mt-1 text-sm text-gray-500'>{item.origin}</p>
        </div>
        <div className='flex flex-1 items-end justify-between text-sm'>
          <p className='text-gray-500'>Qty 1</p>

          <div className='flex'>
            <button
              onClick={() => removeItem(index)}
              type='button'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
