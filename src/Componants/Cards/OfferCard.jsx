/* eslint-disable */

import React from "react";
import { useNavigate } from "react-router-dom";

const OfferCard = ({ img, offer, allBrands }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const brand = allBrands.find((brand) => brand.brandId === offer?.brandId);
    if (brand) {
      navigate(`/brand/${offer?.brandId}`, {
        state: { offer, brand },
      });
    }
  };

  const details = offer?.details || "No details available";
  const promoCode = offer?.promoCode || "No Code";

  return (
    <div
      className="offer-card cursor-pointer bg-orange-500 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 relative"
      onClick={handleClick}
    >
      <div className="relative">
        {/* Promo Code */}
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
          {promoCode}
        </div>

        {/* Offer Image */}
        <img
          className="h-48 w-full object-cover"
          src={img}
          alt="Offer"
        />

        {/* Offer Details */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-white text-lg font-semibold">{details}</h2>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
