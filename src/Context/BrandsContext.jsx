/* eslint-disable */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandsContext = createContext();

export function BrandsProvider({ children }) {
  const [allBrands, setAllBrands] = useState([]);
  const [brandLoading, setBrandLoading] = useState(true);
  const [selectedBrandId, setSelectedBrandId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_APP_MAIN_API_LINK}/api/brands`,
    })
      .then((response) => {
        setAllBrands(response.data.Data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
        setAllBrands([]);
      })
      .finally(() => {
        setBrandLoading(false);
      });
  }, []);

  const updateBrandId = (id) => {
    setSelectedBrandId(id);
    navigate(`/products/brandproducts/${id}`);
    console.log(id);

    // const getOneBrand =()
  };

  return (
    <BrandsContext.Provider
      value={{ allBrands, brandLoading }}
    >
      {children}
    </BrandsContext.Provider>
  );
}

export default function useBrands() {
  const context = useContext(BrandsContext);
  if (!context) {
    throw new Error("useBrands must be used within a BrandsProvider");
  }
  return context;
}
