import { useRouter } from "next/router";
import { ReactEventHandler, useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  // feedback: no real need for this. Can just put this in handle submit
  const redirect = (query: string) =>
    router.push(`/products/searchResult?title=${query}`);

  const [search, setSearch] = useState("");

  const handleChange = (e: any) => setSearch(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    redirect(search);
    setSearch("");
  };

  return (
    <div className="flex items-center justify-center">
      <form className="flex border-2 rounded" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className="px-4 py-2 w-64 h-8"
          placeholder="Search..."
          value={search}
          onChange={(e) => handleChange(e)}
        />
        <button className="flex items-center justify-center px-3 border-l">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
