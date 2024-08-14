/* eslint-disable */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const CategoriesContext = createContext();

// Create a provider component
export function CategoriesProvider({ children }) {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      // headers: {
      //   Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
      // },
      method: "get",
      url: `${import.meta.env.VITE_APP_MAIN_API_LINK}/api/Categories`,
    })
      .then((response) => {
        // console.log(response.data.data);
        setAllCategories(response.data.data);
      })
      .catch((error) => {
        // console.error("Error fetching categories:", error);
        setAllCategories([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CategoriesContext.Provider value={{ allCategories, loading }}>
      {children}
    </CategoriesContext.Provider>
  );
}

// Custom hook to use the CategoriesContext
export default function useCategories() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
}
