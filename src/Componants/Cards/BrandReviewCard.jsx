/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { formatDistanceToNow, parseISO } from "date-fns";
import { Dialog } from "@headlessui/react";
import GoldenStar from "../../assets/star.png";
import WhiteStar from "../../assets/star_white.png";
import CustomLocale from "../CustomLocale"; // Import your custom locale

function BrandReviewCard(props) {
  const [inView, setInView] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [likes, setLikes] = useState(props.likes || 0); // Initialize likes with props or 0
  const [dislikes, setDislikes] = useState(props.dislikes || 0); // Initialize dislikes with props or 0
  const [hasLiked, setHasLiked] = useState(false); // Track if the user has liked
  const [hasDisliked, setHasDisliked] = useState(false); // Track if the user has disliked
  const [userAction, setUserAction] = useState(null); // Track the current user action (like or dislike)
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

  // Ensure that props.service is a valid number
  const serviceRating = parseFloat(props.service);

  if (isNaN(serviceRating)) {
    console.error("Invalid service rating:", serviceRating);
    return null; // Prevent rendering if the service rating is invalid
  }

  const roundedRating = Math.round(serviceRating);
  const totalStars = 5;

  // Avoid creating invalid arrays
  const goldenStars = Array(Math.min(roundedRating, totalStars)).fill(true);
  const whiteStars = Array(Math.max(totalStars - roundedRating, 0)).fill(false);

  // Format date using date-fns with custom locale
  const formattedDate = formatDistanceToNow(parseISO(props.date), {
    addSuffix: true,
    locale: CustomLocale, // Use the custom locale here
  });

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  // Convert byte array to Base64 string
  const encodeImageToBase64 = (data) => {
    const byteArray = new Uint8Array(data);
    let binary = "";
    byteArray.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return `data:image/jpeg;base64,${btoa(binary)}`;
  };

  const photoBase64 = props.photos
    ? encodeImageToBase64(props.photos.data)
    : null;
  const brandImageBase64 = props.brandImage
    ? encodeImageToBase64(props.brandImage.data)
    : null;

  const handleLikeClick = async () => {
    if (!props.reviewId) {
      console.error("reviewId is missing");
      return;
    }

    // If user has already disliked, prevent them from liking
    if (hasDisliked) {
      console.error("Cannot like after disliking");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/reviews/addlike/${props.reviewId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLikes(data.data.likes); // Update the likes state with the latest value from the backend
        setHasLiked(true); // Set the like flag
        setUserAction("like"); // Set the current user action
        console.log("Like added successfully");
      } else {
        console.error("Failed to add like:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to add like:", error);
    }
  };

  const handleDislikeClick = async () => {
    if (!props.reviewId) {
      console.error("reviewId is missing");
      return;
    }

    // If user has already liked, prevent them from disliking
    if (hasLiked) {
      console.error("Cannot dislike after liking");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/reviews/adddislike/${props.reviewId}`, // Change the endpoint to adddislike
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setDislikes(data.data.dislikes); // Update the dislikes state with the latest value from the backend
        setHasDisliked(true); // Set the dislike flag
        setUserAction("dislike"); // Set the current user action
        console.log("Dislike added successfully");
      } else {
        console.error("Failed to add dislike:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to add dislike:", error);
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        animate={{ scale: inView ? 1 : 0 }}
        initial={{ scale: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full flex justify-center bg-orange-500 rounded-3xl cursor-pointer"
        onClick={toggleModal}
      >
        <div>
          <div
            className="absolute w-16 h-16 top-4 left-1/3 rounded-full bg-black"
            style={{
              backgroundImage: `url(${photoBase64})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="absolute w-16 h-16 top-4 right-1/3 rounded-full bg-black"
            style={{
              backgroundImage: `url(${brandImageBase64})`, // Assuming `brandImage` is passed as a prop
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="w-full flex flex-col m-6 mt-12 p-2 justify-between items-center text-center bg-slate-100 rounded-3xl gap-4">
          <h3 className="font-bold flex mt-7">{props.brand}</h3>
          <p className="flex text-sm">{props.content}</p>
          <div className="flex w-full justify-between items-center px-1">
            <div className="text-slate-400">{formattedDate}</div>
            <div className="hidden md:flex gap-1">
              {goldenStars.map((_, index) => (
                <img
                  key={index}
                  className="w-5 h-5"
                  src={GoldenStar}
                  alt="Golden Star"
                />
              ))}
              {whiteStars.map((_, index) => (
                <img
                  key={index}
                  className="w-5 h-5"
                  src={WhiteStar}
                  alt="White Star"
                />
              ))}
            </div>
            <div className="flex md:hidden justify-center items-center gap-x-2">
              <p className="text-lg font-bold">{roundedRating}</p>
              <img className="w-5 h-5" src={GoldenStar} alt="Golden Star" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={toggleModal}>
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <Dialog.Panel className="relative p-4 w-full max-w-2xl shadow bg-orange-500 rounded-xl">
            <Dialog.Title className="text-xl font-semibold text-gray-900 dark:text-white flex items-center justify-between">
              {props.brand} Review
              <button
                type="button"
                onClick={toggleModal}
                className="text-slate-100 bg-transparent hover:bg-orange-200 hover:text-orange-400 rounded-full text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {props.content}
              </p>
            </div>
            <div className="mt-4 flex justify-around items-center">
              <button
                className={`px-4 py-2 rounded-lg ${
                  hasLiked ? "bg-blue-600 text-white" : "bg-blue-400 text-white"
                }`}
                onClick={handleLikeClick}
                disabled={hasLiked || hasDisliked}
              >
                Like {likes}
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${
                  hasDisliked
                    ? "bg-red-600 text-white"
                    : "bg-red-400 text-white"
                }`}
                onClick={handleDislikeClick}
                disabled={hasDisliked || hasLiked}
              >
                Dislike {dislikes}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default BrandReviewCard;
