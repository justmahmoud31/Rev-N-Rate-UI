/* eslint-disable */

import React, { useState } from "react";

const PriceFilter = () => {
  const [amount, setAmount] = useState(1000);

  return (
    <form className="max-w-[24rem] mx-auto">
      <div className="flex mb-4">
        <button
          id="dropdown-currency-button"
          data-dropdown-toggle="dropdown-currency"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          <svg
            fill="none"
            aria-hidden="true"
            className="h-4 w-4 me-2"
            viewBox="0 0 20 15"
          >
            {/* SVG content */}
          </svg>
          EGP
          <svg
            className="w-2.5 h-2.5 ms-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdown-currency"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-currency-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <svg
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 me-2"
                    viewBox="0 0 20 15"
                  >
                    {/* SVG content for EGP */}
                  </svg>
                  EGP
                </div>
              </button>
            </li>
          </ul>
        </div>
        <label
          htmlFor="currency-input"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Amount
        </label>
        <div className="relative w-full">
          <input
            type="number"
            id="currency-input"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="relative">
        <label htmlFor="price-range-input" className="sr-only">
          Default range
        </label>
        <input
          id="price-range-input"
          type="range"
          value={amount}
          min="100"
          max="1500"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={(e) => setAmount(e.target.value)}
        />
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
          Min (EGP 100)
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          EGP 500
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
          EGP 1000
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
          Max (EGP 1500)
        </span>
      </div>
    </form>
  );
};

export default PriceFilter;
