import Link from 'next/link';
import NavBar from '../src/components/NavBar';

export default function Categories() {
  return (
    <div>
      <NavBar />
      <h1>Choose a category</h1>
      <ul>
        <li>
          <Link href={'/products/allProducts'}>All products</Link>
        </li>
        <li>
          <Link href={'/products/1'}>Category 1</Link>
        </li>
        <li>
          <Link href={'/products/2'}>Category 2</Link>
        </li>
        <li>
          <Link href={'/products/3'}>Category 3</Link>
        </li>
      </ul>
    </div>
  );
}
