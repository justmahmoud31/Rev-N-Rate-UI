/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Componants/Header";
import BrandState from "../Componants/BrandState";
import Heading from "../Componants/Headnig";
import useBrands from "../Context/BrandsContext";
import PrimaryButton from "../Componants/PrimaryButton";
import Title from "../Componants/Title";
import Footer from "../Componants/Footer";
import { AuthContext } from "../Context/AuthContext";
import ProductsCard from "../Componants/Cards/ProductsCard";
import { IoCall } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import GoldenStar from "../assets/star.png";
import Rating from "../Componants/Rating";
import axios from "axios";

function BrandProductsScreen() {
  const { userId } = useContext(AuthContext); // Ensure this is inside the function component
  const { allBrands, brandLoading } = useBrands();
  const location = useLocation();
  const { brand } = location.state || {};
  const [products, setProducts] = useState([]); // Ensure initial state is an array
  const [productsLoading, setProductsLoading] = useState(true);

  const BrandProducts = () => {
    if (brand && brand.brandId) {
      axios({
        method: "get",
        url: `${
          import.meta.env.VITE_APP_MAIN_API_LINK
        }/api/products/brandproducts/${brand.brandId}`,
      })
        .then((response) => {
          if (Array.isArray(response.data.data)) {
            setProducts(response.data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setProducts([]);
        })
        .finally(() => {
          setProductsLoading(false);
        });
    }
  };

  useEffect(() => {
    BrandProducts();
  }, [brand]);

  if (brandLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  if (!brand) {
    return <div>No brand data available</div>;
  }

  return (
    <div className="bg-slate-100">
      <div>
        <Header />

        <img
          className="w-full h-72 md:h-96 lg:h-530px xl:h-530px object-cover"
          src={brand.photos}
          alt=""
        />
        {/* Brand Name & Logo  */}
        <div className="w-full h-72 -mt-16 md:-mt-32 grid grid-cols-3 gap-4 justify-center items-center">
          {/* col 1 */}
          <div className="w-full h-full flex col-span-3 md:col-span-2 justify-between md:justify-start items-center px-8">
            <div
              className="w-36 h-36 lg:w-64 lg:h-64 md:w-48 md:h-48 rounded-full bg-white"
              style={{
                backgroundImage: `url(${brand.logo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex flex-col items-start justify-center mx-4 mt-0 md:mt-10">
              <Heading
                className="text-orange-500 my-3"
                value1={brand.brandName}
              />
              <div className="w-full flex">
                <BrandState className="w-full justify-start" value="open" />
                <div className="flex w-full items-center justify-end">
                  <p>4.9</p>
                  <img className="w-4 h-4" src={GoldenStar} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* col 2 */}
          <div className="flex items-center justify-center col-span-3 md:col-span-1 md:pr-12 md:pl-0 px-12">
            <PrimaryButton
              className="text-xl lg:text-2xl xl:text-2xl font-bold md:mt-12"
              name="Add Review"
              to={userId ? `/addbrandreview/${brand.brandId}` : `/login`}
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 mx-12 py-4 gap-x-9 mb-12">
          {/* col 1 : about - items..etc */}
          <div className="grid col-span-3 xl:col-span-2 lg:col-span-2 md:col-span-3 sm:col-span-3 gap-y-8">
            {/* Items */}
            <div className="w-full">
              {/* Brand Screen Heading */}
              <div className="flex items-end justify-between">
                <Title
                  className="text-xl md:text-3xl xl:text-4xl font-bold"
                  title="Products"
                />
              </div>

              <hr className="h-1 my-2 bg-black" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {products.map((product) => (
                  <ProductsCard key={product.productId} img={product.photos} />
                ))}
              </div>
            </div>
          </div>

          {/* col 2 : Info - Rating */}
          <div className="grid sticky top-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 col-span-3 lg:col-span-1 xl:col-span-1 p-2 gap-12 mt-12 self-start">
            {/* row 1 : info */}
            <div className="flex flex-col border-2 rounded-2xl p-4 border-black">
              <Title
                className="text-3xl lg:text-4xl text-orange-500 font-bold text-center"
                title="Info"
              />

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
              />
              <Rating></Rating>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrandProductsScreen;
