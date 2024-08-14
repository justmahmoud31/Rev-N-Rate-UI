/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import axios from "axios";

// import REACT_APP_MAIN_API_LINK from ".env";

// import { CategoriesContext } from "../Context/CategoriesContext.jsx";
import { useRecoilState } from "recoil";
import categoriesState from "../Atoms/CategoriesAtoms.jsx";


export default function AllCategories() {
  // const value = useContext(CategoriesContext);
  // console.log(value);
  const [categories, setCategories] = useRecoilState(categoriesState);
  // console.log(categories);

  const allCategories = useContext(allCategories);

  return (
    <>
      <div>
        {allCategories.map((category) => (
          <div key={category.categoryId}>
            <h1>{category.categoryId}</h1>
            <p>{category.categoryName}</p>
          </div>
        ))}
      </div>
    </>
  );
}

// allCategories.toggle = function () {
//   return <h1>MAS</h1>;
// };

// export default allCategories;
