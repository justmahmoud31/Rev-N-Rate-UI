/* eslint-disable */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const ReviewsContext = createContext();

// Create a provider component
export function ReviewsProvider({ children }) {
  const [popularReviews, setPopularReviews] = useState([]);
  const [popularReviewsloading, setPopularReviewsLoading] = useState(true);

  //   console.log("API Link:", import.meta.env.VITE_APP_MAIN_API_LINK);
  //   console.log("Token:", import.meta.env.VITE_APP_TOKEN);

  useEffect(() => {
    axios({
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      },
      method: "get",
      url: `${
        import.meta.env.VITE_APP_MAIN_API_LINK
      }/api/reviews/popularreviews`,
    })
      .then((response) => {
        // console.log(response.data.data);
        setPopularReviews(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Popular Reviews:", error);
        setPopularReviews([]);
      })
      .finally(() => {
        setPopularReviewsLoading(false);
      });
  }, []);

  return (
    <ReviewsContext.Provider value={{ popularReviews, popularReviewsloading }}>
      {children}
    </ReviewsContext.Provider>
  );
}

// Custom hook to use the OffersContext
export default function useReviews() {
  const context = useContext(ReviewsContext);
  if (!context) {
    throw new Error("useReviews must be used within a ReviewsProvider");
  }
  return context;
}
