import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import client from "../apolo-client";
import NavBar from "../src/components/NavBar";
import { GET_CATEGORIES } from "../src/queries/queries";
import { Categories, User } from "../src/__generated__/graphql";

// feedback: there is no real need for this function.
// it's better to create a reusable UI component but put the rest of this in CategoriesHome
function GetCategories() {
  const { error, loading, data } = useQuery(GET_CATEGORIES, { client: client });

  const router = useRouter();
  const redirect = (id: any) => {
    router.push(`/products/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.getCategories.map((cat: Categories) => (
    // feedback: you need to use a <Link> element and wrap it in an anchor tag for proper SEO
    <button
      onClick={() => redirect(cat.id)}
      className="relative inline-flex m-4 items-center px-12 py-3 overflow-hidden text-lg font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:text-white group hover:bg-gray-50"
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-teal-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        {/* feedback: SVGs can be put in their own files and imported */}
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="relative w-52 text-center">{cat.name}</span>
    </button>
  ));
}

// feedback: name of the file should also have first letter capital (it's categoriesHome)
export default function CategoriesHome() {
  const router = useRouter();
  const redirectAll = () => {
    router.push("/products/allProducts");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 h-screen">
      <NavBar />
      <h1 className="font-bold text-xl mt-8 mb-5">Select a category</h1>
      <GetCategories />
      <button
        onClick={() => redirectAll()} // feedback: this should use <Link>
        className="relative inline-flex m-4 items-center px-12 py-3 overflow-hidden text-lg font-medium text-teal-600 border-2 border-teal-600 rounded-full hover:text-white group hover:bg-gray-50"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-teal-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="relative w-52 text-center">All Products</span>
      </button>
    </div>
  );
}
