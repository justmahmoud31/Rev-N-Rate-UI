/* eslint-disable */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import RevRateLogo from "../assets/logo.svg";
import brand1 from "../assets/image1.jpg";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import category5 from "../assets/category5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Componants/Headnig.jsx";
import CategoryItem from "../Componants/CategoryItem";
import Slider from "react-slick";
import Header from "../Componants/Header.jsx";
import BrandBar from "../Componants/BrandBar.jsx";
import brand2 from "../assets/category1.jpg"; // Another example image
import brand3 from "../assets/home.jpg"; // Yet another example image

// import { useEffect, useState } from "react";
import { createContext, useState, useEffect, useContext } from "react";

import axios from "axios";
import { useRecoilState } from "recoil";
import categoriesState from "../Atoms/CategoriesAtoms.jsx";
import SearchBar from "../Componants/SearchBar.jsx";
import ReviewCard from "../Componants/Cards/ReviewCard.jsx";
import useCategories from "../Context/CategoriesContext.jsx";
import useBrands from "../Context/BrandsContext.jsx";
import OfferCard from "../Componants/Cards/OfferCard.jsx";
import Footer from "../Componants/Footer.jsx";
import { useNavigate } from "react-router-dom";
import useOffers from "../Context/OffersContext.jsx";
import useReviews from "../Context/ReviewsContext.jsx";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HomeScreen() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable left and right navigation buttons
  };
  // const [categories, setCategories] = useRecoilState(categoriesState);
  const { allCategories, loading } = useCategories();
  const { allBrands, brandLoading } = useBrands();
  const { allOffers, offersLoading } = useOffers();
  const { popularReviews, popularReviewsloading } = useReviews();
  const navigate = useNavigate();

  // console.log(popularReviews);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading || brandLoading || offersLoading || popularReviewsloading) {
    return <div>Loading...</div>;
  }

  // console.log(popularReviews);

  return (
    <>
      {/* Hero Section */}
      <div
        className=" bg-white hidden "
        style={{
          backgroundImage: `url(${brand1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
      </div>

      {/* <BrandBar /> */}
      <div className="bg-white flex w-lvw h-screen">
        <Header></Header>
        <Slider {...settings} className="bg-black w-full overflow-hidden">
          {/* Slide 1 */}
          <div>
            <div
              className="h-screen flex flex-col justify-evenly items-center"
              style={{
                backgroundImage: `url(${brand1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="mt-24 text-9xl text-shadow-lg font-bold tracking-tight text-orange-400">
                FOOD
              </h2>
              <BrandBar />
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div
              className="h-screen flex flex-col justify-evenly items-center"
              style={{
                backgroundImage: `url(${brand2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="mt-24 text-9xl text-shadow-lg font-bold tracking-tight text-orange-400">
                DELICIOUS
              </h2>
              <BrandBar />
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div
              className="h-screen flex flex-col justify-evenly items-center"
              style={{
                backgroundImage: `url(${brand3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="mt-24 text-9xl text-shadow-lg font-bold tracking-tight text-orange-400">
                Clothes
              </h2>
              <BrandBar />
            </div>
          </div>
        </Slider>
      </div>

      {/* Category section */}
      <div className="mx-12 h-ull">
        <Heading value1="Categories" className="my-8 text-orange-500" />

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-24">
          {allCategories && allCategories.length > 0 ? (
            <>
              {allCategories.slice(0, 5).map((category) => (
                <CategoryItem
                  key={category.categoryId}
                  name={category.categoryName}
                  img={category.categoryPic}
                  onClick={() =>
                    navigate(`/getonecategory/${category.categoryId}`, {
                      state: { category },
                    })
                  }
                />
              ))}
              {/* Additional CategoryItem */}
              <CategoryItem
                className="bg-orange-500"
                name="Show all categories"
                img="path_to_image"
                onClick={() => navigate("/categories")}
              />
            </>
          ) : (
            <div>No categories available</div>
          )}
        </div>
      </div>

      {/* Offers section */}
      <div className="mx-12 h-full">
        <Heading
          value1="Offers"
          to={"/Offers"}
          className="my-8 text-orange-500"
        />

        <div className="h-full w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-60">
          {allOffers && allOffers.length > 0 ? (
            <>
              {allOffers.slice(0, 5).map((offer) => (
                <OfferCard
                  key={offer.offersId}
                  offer={offer}
                  img={offer.photo}
                  allBrands={allBrands}
                />
              ))}
              {/* Additional OfferCard */}
              <CategoryItem
                name="Show all Offers"
                className="h-full bg-orange-500 rounded-lg "
                onClick={() => navigate(`/offers`)}
              ></CategoryItem>
            </>
          ) : (
            <div>No Offers available</div>
          )}
        </div>
      </div>

      {/* Reviews section */}
      <div className="mx-12 h-full">
        <Heading value1="Popular Reviews" className="my-8 text-orange-500" />

        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-9 mb-12">
          {popularReviews && popularReviews.length > 0 ? (
            <>
              {popularReviews.slice(0, 5).map((review) => (
                <ReviewCard
                  key={review.reviewId}
                  reviewId={review.reviewId} // Pass the reviewId here
                  content={review.comments}
                  rete={review.quality}
                  date={review.date}
                  brand={review.Brand.brandName}
                  details={review.details}
                  service={review.service}
                  photos={review.photos}
                  dislikes={review.dislikes}
                  likes={review.likes}
                  brandId={review.Brand.brandId} // Pass additional brand data here
                  brandImage={review.Brand.image} // Pass brand image or other data if available
                />
              ))}
              {/* Additional ReviewCard */}
              <CategoryItem
                name="Show all Reviews"
                className="h-full bg-orange-500 rounded-3xl"
                onClick={() => navigate(`/reviews`)}
              ></CategoryItem>
            </>
          ) : (
            <div>No Reviews available</div>
          )}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
