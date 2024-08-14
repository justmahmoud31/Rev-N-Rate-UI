/* eslint-disable */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Componants/Footer";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import BrandCard from "../Componants/Cards/BrandCard";
import CategoriesScreen from "./CategoriesScreen";
import CategoryItem from "../Componants/CategoryItem";

function SearchScreen() {
  const { allBrands, brandLoading } = useBrands();
  const location = useLocation();
  const query = location.state?.query || "";
  const navigate = useNavigate();

  if (brandLoading) {
    return <div>Loading...</div>;
  }

  const filteredBrands = allBrands.filter(
    (brand) =>
      brand.brandName &&
      query &&
      brand.brandName.toLowerCase().includes(query.toLowerCase())
  );
  const brandAfterFilter = allBrands.filter(
    (brand) => !filteredBrands.includes(brand)
  );

  // console.log("Filtered Brands:", filteredBrands);

  return (
    <div>
      <Header />
      <section className="mx-12 mt-40">
        <Heading
          className="text-orange-500"
          value1={`Search Results for: ${query}`}
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-8">
          {filteredBrands.length > 0 ? (
            filteredBrands.map((brand) => (
              <BrandCard
                key={brand.brandId}
                img={brand.logo}
                onClick={() => {
                  console.log(`Navigating to /brand/${brand.brandId}`);
                  navigate(`/brand/${brand.brandId}`, { state: { brand } });
                }}
              />
            ))
          ) : (
            <CategoryItem name={`No Brands available for ${query}`} className="h-full bg-orange-500"></CategoryItem>
          )}
          {brandAfterFilter.length > 0 ? (
            brandAfterFilter.map((brand) => (
              <BrandCard
                key={brand.brandId}
                img={brand.logo}
                onClick={() => {
                  console.log(`Navigating to /brand/${brand.brandId}`);
                  navigate(`/brand/${brand.brandId}`, { state: { brand } });
                }}
              />
            ))
          ) : (
            <div>No Brands available for "{query}"</div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SearchScreen;
