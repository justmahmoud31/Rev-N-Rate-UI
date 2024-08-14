/* eslint-disable */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here, we use navigate to go to the search route and pass the search input as state
    navigate("/search", { state: { query: searchInput } });
    console.log(`Searching for: ${searchInput}`);
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSearchSubmit}>
      <div className="flex relative">
        <button
          id="dropdown-button"
          onClick={toggleDropdown}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-slate-100 bg-gray-100 border border-gray-300 rounded-l-3xl hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 dark:bg-slate-300 dark:hover:text-slate-100 dark:hover:bg-orange-400 dark:focus:ring-orange-400 dark:text-slate-900"
          type="button"
        >
          Categories
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
        {dropdownOpen && (
          <div
            id="dropdown"
            className="absolute left-0 top-full mt-1 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-orange-400"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {["Mockups", "Templates", "Design", "Logos"].map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-orange-300 dark:hover:text-white"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            value={searchInput}
            onChange={handleSearchChange}
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-3xl border-l-gray-50 border-l-2 border border-gray-300 dark:bg-slate-300 dark:border-l-gray-700 dark:placeholder-gray-400 dark:text-orange-900 dark:focus:border-orange-400"
            placeholder="Brand,Company,Store.."
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-orange-500 rounded-r-3xl border border-orange-500 hover:bg-orange-400"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 19l-4-4m0-7A7 7 0 11 1 8a7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
