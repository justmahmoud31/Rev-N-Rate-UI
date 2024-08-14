/* eslint-disable */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import brand1 from "../assets/brand.png";
import brand2 from "../assets/brand2.jpg";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import BrnadHS from "../Componants/BrandHS";
import useBrands from "../Context/BrandsContext";
import { useNavigate } from "react-router-dom";

function BrandBar() {
  const [isScrolling, setIsScrolling] = useState(true);
  const [direction, setDirection] = useState(-1); // -1 for left, 1 for right
  const { allBrands, brandLoading } = useBrands();
  const navigate = useNavigate();

  if (brandLoading) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (!isScrolling) {
      return;
    }
    const interval = setInterval(() => {
      setDirection((prevDirection) => prevDirection * -1);
    }, 10000); // 10 seconds duration, adjust as needed

    return () => clearInterval(interval);
  }, [isScrolling]);

  return (
    <motion.div
      className="relative flex w-full h-60 justify-start items-center py-4 rounded-2xl bg-white overflow-hidden cursor-pointer"
      onHoverStart={() => setIsScrolling(false)}
      onHoverEnd={() => setIsScrolling(false)}
    >
      <motion.div
        className="flex h-full py-4 absolute gap-7"
        animate={{
          x: isScrolling ? (direction === -1 ? -1000 : 1000) : 0, // Adjust the value as per your content's width
        }}
        transition={{
          repeat: Infinity,
          ease: "linear", // Smooth and continuous transition
          duration: 15, // Adjust duration as needed
        }}
      >
        {allBrands && allBrands.length > 0 ? (
          allBrands.map((brand) => (
            <BrnadHS
              key={brand.brandId}
              img={brand.logo}
              onClick={() => navigate(`/brand/${brand.brandId}`, { state: { brand } })} 
            ></BrnadHS>
          ))
        ) : (
          <div>No Brands available</div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default BrandBar;
