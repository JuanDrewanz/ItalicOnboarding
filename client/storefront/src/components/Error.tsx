export default function Error({ error }: any) {
  return (
    <div className='w-full text-center mb-8'>
      <h2>An error has ocurred:</h2>
      <h3>{error.message}</h3>
    </div>
  );
}
