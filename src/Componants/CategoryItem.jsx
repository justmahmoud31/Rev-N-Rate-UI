/* eslint-disable */
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import Heading from "./Headnig";

export default function CategoryItem({ className, img, name, onClick }) {
  const [rotate, setRotate] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current); // Stop observing once the element is in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{ scale: inView ? 1 : 0 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.7 }}
      className={classNames(
        "w-full h-28 bg-black shadow-lg rounded-3xl flex justify-center items-center px-6 cursor-pointer",
        className // Apply the custom className
      )}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={onClick}
    >
      <h3 className="text-4xl font-bold tracking-tight text-white">{name}</h3>
      <div className="w-2/3"></div>
    </motion.div>
  );
}
