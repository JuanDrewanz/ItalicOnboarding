import Link from 'next/link';

export default function Categories() {
  return (
    <div>
      <h1>Choose a category</h1>
      <ul>
        <li>
          <Link href={'/products'}>CAtegory 1</Link>
        </li>
        <li>CAtegory 2</li>
        <li>CAtegory 3</li>
      </ul>
    </div>
  );
}
