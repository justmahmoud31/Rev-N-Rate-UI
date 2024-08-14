/* eslint-disable */

import { Navigate, useLocation, useNavigate } from "react-router-dom";
import BrnadHS from "../Componants/BrandHS";
import CategoryItem from "../Componants/CategoryItem";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import useCategories from "../Context/CategoriesContext";
import { useEffect, useState } from "react";
import Footer from "../Componants/Footer";

function OneCategoryScreen() {
  const { allBrands, brandLoading } = useBrands();
  const { allCategories, loading } = useCategories();
  const navigate = useNavigate();
  const location = useLocation();
  const { category } = location.state;

  const [categoryBrands, setCategoryBrands] = useState([]);
  console.log(categoryBrands);

  useEffect(() => {
    if (allBrands && category) {
      const filterBrands = allBrands.filter(
        (brand) => brand.categoryId === category.categoryId
      );
      setCategoryBrands(filterBrands);
    }
  }, [allBrands, category]);

  //   console.log(allBrands);
  if (loading || brandLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen flex flex-col">
      <Header></Header>
      <div className="mx-12 ">
        <Heading
          className="mt-28 my-8 text-orange-500"
          value1={category.categoryName}
        ></Heading>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-48">
          {categoryBrands && categoryBrands.length > 0 ? (
            categoryBrands.map((brand) => (
              <CategoryItem
                className=""
                key={brand.brandId}
                name={brand.brandName}
                img={brand.logo}
                onClick={() =>
                  navigate(`/brand/${brand.brandId}`, { state: { brand } })
                }
              ></CategoryItem>
            ))
          ) : (
            <div>No Brands available</div>
          )}
          {/* <CategoryItem></CategoryItem>  */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default OneCategoryScreen;
