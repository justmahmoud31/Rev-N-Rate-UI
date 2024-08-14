/* eslint-disable */

import { useNavigate } from "react-router-dom";
import BrnadHS from "../Componants/BrandHS";
import Footer from "../Componants/Footer";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import brand1 from "../assets/brand.png";
import brand2 from "../assets/brand2.jpg";

function BrandsScreen() {
  const { allBrands, brandLoading } = useBrands();
  const navigate = useNavigate(); // useNavigate should be declared at the top level of the component

  if (brandLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="mx-12 h-auto mb-12">
        <Heading className="mt-28 my-8 text-orange-500" value1="Brands" />

        <div className="h-full w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 ">
          {allBrands && allBrands.length > 0 ? (
            allBrands.map((brand) => (
              <BrnadHS
                className="h-60 w-full mx-0"
                key={brand.brandId}
                img={brand.logo}
                onClick={() => navigate("/brand", { state: { brand } })} // pass brand data
              />
            ))
          ) : (
            <div>No Brands available</div>
          )}

          <BrnadHS className="h-60 w-full mx-0" img={brand2} />
          <BrnadHS className="h-60 w-full mx-0" img={brand1} />
          <BrnadHS className="h-60 w-full mx-0" img={brand2} />
          <BrnadHS className="h-60 w-full mx-0" img={brand1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrandsScreen;
