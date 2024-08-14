/* eslint-disable */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Example items array
const items = [
  { id: 1, title: "Title 1", subtitle: "Subtitle 1" },
  { id: 2, title: "Title 2", subtitle: "Subtitle 2" },
  { id: 3, title: "Title 3", subtitle: "Subtitle 3" },
];

function Animation() {
  const [selectedId, setSelectedId] = useState(null);
  const [rotate, setRotate] = useState(false);

  return (
    <div className="exapmle">
      <motion.div
        className="h-40 w-40 rounded-3xl my-10  bg-black "
        animate={{ rotate: rotate ? 90 : 0 }}
        transition={{delay:3}}
        onClick={() => {
          setRotate(!rotate);
        }}
      ></motion.div>
    </div>
  );
}

export default Animation;
