/* eslint-disable */

import React from "react";
import { IoStar } from "react-icons/io5";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import GoldenStar from "../assets/star.png";

function Rating() {
  return (
    <div>
      <div className="flex items-center justify-center  mb-2">
        <img src={GoldenStar} className="w-8 h-8 text-yellow-300 me-1" alt="" />
        <p className="ms-1 text-lg md:text-lg font-medium text-gray-800 ">
          4.95 out of 5
        </p>
      </div>
      <p className="flex justify-center text-sm md:text-lg font-medium text-gray-800 ">
        1,745 global ratings
      </p>
      {[
        {
          label: (
            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-800">5</p>
              <img
                src={GoldenStar}
                className="w-4 h-4 text-yellow-300 me-1"
                alt=""
              />
            </div>
          ),
          percentage: 70,
        },
        {
          label: (
            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-800">4</p>
              <img
                src={GoldenStar}
                className="w-4 h-4 text-yellow-300 me-1"
                alt=""
              />
            </div>
          ),
          percentage: 17,
        },
        {
          label: (
            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-800">3</p>
              <img
                src={GoldenStar}
                className="w-4 h-4 text-yellow-300 me-1"
                alt=""
              />
            </div>
          ),
          percentage: 8,
        },
        {
          label: (
            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-800">4</p>
              <img
                src={GoldenStar}
                className="w-4 h-4 text-yellow-300 me-1"
                alt=""
              />
            </div>
          ),
          percentage: 4,
        },
        {
          label: (
            <div className="flex justify-center items-center gap-2">
              <p className="text-gray-800">1</p>
              <img
                src={GoldenStar}
                className="w-4 h-4 text-yellow-300 me-1"
                alt=""
              />
            </div>
          ),
          percentage: 1,
        },
      ].map((rating, index) => (
        <div className="flex items-center mt-4" key={index}>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            {rating.label}
          </a>
          <div className="w-full h-3 mx-4 bg-gray-200 rounded dark:bg-slate-300">
            <div
              className="h-3 bg-orange-500 rounded"
              style={{ width: `${rating.percentage}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-700">
            {rating.percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default Rating;
