/* eslint-disable */

import { useNavigate } from "react-router-dom";
import CategoryItem from "../Componants/CategoryItem";
import Header from "../Componants/Header";
import Heading from "../Componants/Headnig";
import useCategories from "../Context/CategoriesContext";
import OfferCard from "../Componants/Cards/OfferCard";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import Footer from "../Componants/Footer";
import useOffers from "../Context/OffersContext";
import useBrands from "../Context/BrandsContext";

function OffersScreen() {
  const { allOffers, offersLoading } = useOffers();
  const { allBrands, brandLoading } = useBrands();

  const navigate = useNavigate();
  if (offersLoading || brandLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header></Header>
      <div className="mx-12 h-auto">
        <Heading
          className="mt-28 my-8 text-orange-500"
          value1="Offers"
        ></Heading>

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-60">
          {allOffers && allOffers.length > 0 ? (
            allOffers.map((offer) => (
              <OfferCard
              key={offer.offersId}
              offer={offer}
              img={offer.photo}
              allBrands={allBrands}
              />
            ))
          ) : (
            <div>No Offers available</div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default OffersScreen;
