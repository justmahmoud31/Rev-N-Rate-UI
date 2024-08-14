/* eslint-disable */
import { useLocation } from "react-router-dom";
import Header from "../Componants/Header";
import BrandState from "../Componants/BrandState";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import PrimaryButton from "../Componants/PrimaryButton";
import Title from "../Componants/Title";
import OfferCard from "../Componants/Cards/OfferCard";
import ProgressBar from "../Componants/ProgressBar";
import ReviewCard from "../Componants/Cards/ReviewCard";
import Rating from "../Componants/Rating";
import Footer from "../Componants/Footer";
import ProductsCard from "../Componants/Cards/ProductsCard";
import { IoCall } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { MdDoubleArrow } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import RevRateLogo from "../assets/logo.svg";
import category1 from "../assets/category1.jpg";
import brand2 from "../assets/brand2.jpg";
import GoldenStar from "../assets/star.png";
import leftArrow from "../assets/right-arrow.png";
import product2 from "../assets/product2.jpg";
import product1 from "../assets/product1.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import { AuthContext } from "../Context/AuthContext";
import BrandReviewCard from "../Componants/Cards/BrandReviewCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
function BrandReviewsScreen() {
  const { userId } = useContext(AuthContext); // Ensure this is inside the function component
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const { brand } = location.state || {};

  const fetchBrandReviews = () => {
    if (brand && brand.brandId) {
      axios({
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
        },
        method: "get",
        url: `${
          import.meta.env.VITE_APP_MAIN_API_LINK
        }/api/reviews/brandReviews/${brand.brandId}`,
      })
        .then((response) => {
          if (Array.isArray(response.data.Data)) {
            setReviews(response.data.Data);
          }
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
          setReviews([]);
        })
        .finally(() => {
          setReviewsLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchBrandReviews();
  }, [brand]);

  // Ensure brand and brand.photos exist before rendering
  if (!brand) {
    return <div>No brand data available</div>;
  }

  return (
    <div className="bg-slate-100">
      <div>
        <Header></Header>

        <img
          className="w-full h-72  md:h-96 lg:h-530px xl:h-530px object-cover"
          src={brand.photos}
          alt=""
        />
        {/* Brand Name & Logo  */}
        <div className="w-full h-72 -mt-16 md:-mt-32 grid grid-cols-3 gap-4 justify-center items-center">
          {/* col 1 */}
          <div className="w-full h-full flex col-span-3 md:col-span-2 justify-between md:justify-start  items-center px-8  ">
            <div
              className="w-36 h-36 lg:w-64 lg:h-64 md:w-48 md:h-48 rounded-full bg-white"
              style={{
                backgroundImage: `url(${brand.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col items-start justify-center mx-4 mt-0 md:mt-10  ">
              <Heading
                className="text-orange-500 my-3"
                value1={brand.brandName}
              ></Heading>
              <div className="w-full flex   ">
                <BrandState
                  className="w-full justify-start"
                  value="open"
                ></BrandState>
                <div className="flex w-full items-center justify-end">
                  <p className="">4.9</p>
                  <img className="w-4 h-4" src={GoldenStar} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* col 2 */}
          <div className="flex items-center justify-center col-span-3 md:col-span-1 md:pr-12 md:pl-0 px-12   ">
            <PrimaryButton
              className="text-xl lg:text-2xl xl:text-2xl font-bold  md:mt-12"
              name="Add Review"
              to={userId ? `/addbrandreview/${brand.brandId}` : `/login`}
            ></PrimaryButton>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 mx-12 py-4 gap-x-9 mb-12 ">
          {/* col 1 : about - items..etc */}
          <div className="grid col-span-3 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3  gap-y-8  ">
            {/* Items */}
            <div className="w-full">
              {/* Brand Screen Heading */}
              <div className="flex items-end justify-between">
                <Title
                  className="text-xl md:text-3xl xl:text-4xl font-bold"
                  title="Reviews"
                ></Title>
              </div>

              <hr className="h-0.5 my-2 bg-black" />
              {reviews.length === 0 ? (
                <div className="text-lg text-center py-4">
                  No available reviews
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                  {reviews.map((review) => (
                    <BrandReviewCard
                      key={review.reviewId}
                      content={review.comments}
                      reviewerName={review.reviewer.username || "Anonmus"}
                      date={review.date}
                      quality={review.quality}
                      service={review.service}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* col 2 : Info - Rating */}
          <div className="grid sticky top-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 col-span-3 lg:col-span-1 xl:col-span-1 p-2 gap-12 mt-12 self-start">
            {/* row 1 : info */}
            <div className="flex flex-col border-2 rounded-2xl p-4 border-black">
              <Title
                className="text-3xl lg:text-4xl text-orange-500 font-bold text-center"
                title="Info"
              ></Title>

              <div className="flex flex-col items-start w-full gap-20 py-10">
                <div className="flex gap-3">
                  <i className="text-3xl">
                    <TbWorld />
                  </i>
                  <a
                    className="text-md xl:text-2xl font-semibold underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    https://karamelsham.org
                  </a>
                </div>
                <div className="flex gap-3">
                  <i className="text-3xl">
                    <ImLocation2 />
                  </i>
                  <a
                    className="text-md xl:text-2xl font-semibold underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    https://g.co/kgs/Krq42bs
                  </a>
                </div>
                <div className="flex gap-3">
                  <i className="text-3xl">
                    <IoCall />
                  </i>
                  <a
                    className="text-md xl:text-2xl font-semibold underline text-slate-600 hover:text-blue-900"
                    href=""
                  >
                    01018604335
                  </a>
                </div>
              </div>
            </div>

            {/* row 2 : Rating */}
            <div className="flex flex-col border-2 rounded-2xl p-9 border-black gap-9">
              <Title
                className="text-3xl lg:text-4xl text-orange-500 font-bold text-center"
                title="Rating"
              ></Title>

              <Rating></Rating>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default BrandReviewsScreen;
