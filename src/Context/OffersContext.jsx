/* eslint-disable */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const OffersContext = createContext();

// Create a provider component
export function OffersProvider({ children }) {
  const [allOffers, setAllOffers] = useState([]);
  const [loading, setLoading] = useState(true);

//   console.log("API Link:", import.meta.env.VITE_APP_MAIN_API_LINK);
//   console.log("Token:", import.meta.env.VITE_APP_TOKEN);

  useEffect(() => {
    axios({
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      },
      method: "get",
      url: `${import.meta.env.VITE_APP_MAIN_API_LINK}/api/offers`,
    })
      .then((response) => {
        // console.log(response.data.data);
        setAllOffers(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching Offers:", error);
        setAllOffers([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <OffersContext.Provider value={{ allOffers, loading }}>
      {children}
    </OffersContext.Provider>
  );
}

// Custom hook to use the OffersContext
export default function useOffers() {
  const context = useContext(OffersContext);
  if (!context) {
    throw new Error("useOffers must be used within a OffersProvider");
  }
  return context;
}
