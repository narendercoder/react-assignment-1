import React from "react";
import {
  LiaArrowsAltSolid,
  LiaBathSolid,
  LiaBedSolid,
  LiaCitySolid,
} from "react-icons/lia";
import {MdOutlineLocationOn} from "react-icons/md"

const Card = ({ property }) => {

  return (
    <div className="p-3 cards">
      <div className="top-section"></div>

      <div className="card-image rounded overflow-hidden w-full">
          <img className="h-full w-full" src={property.image} alt="city" />
      </div>

      <div className="card-details py-5 px-2">
        <div className="location text-left flex justify-center items-center">
          <span><MdOutlineLocationOn/></span>
          <span>{property.location}</span>
        </div>

        <div className="title py-3 text-left">
          <h2 className="text-xl font-semibold text-gray-600">
            {property.title}
          </h2>
        </div>

        <div className="py-3 flex justify-between items-center">
          <div className="flex flex-col justify-center items-center">
            <span>
              <LiaCitySolid />
            </span>
            <span>{property.Rooms} Room</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>
              <LiaBedSolid />
            </span>
            <span>{property.Beds} Beds</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>
              <LiaBathSolid />
            </span>
            <span>{property.Bath} Bath</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span>
              <LiaArrowsAltSolid />
            </span>
            <span>{property.size} sft</span>
          </div>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="price text-left  text-xl">
            <span className="text-blue-600 font-semibold">{`$${property.price_per_month}`}</span>
            /month
          </div>
          <div className="btn  text-base font-bold border border-blue-700 text-blue-700 rounded-full px-4 py-2">
            <span>Read More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

