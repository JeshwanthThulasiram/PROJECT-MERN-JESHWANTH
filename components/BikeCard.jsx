import React from "react";
import Image from "next/image";

const BikeCard = ({ name, image, modelYear, cost }) => {
  return (
    <div className="bike-card rounded-lg shadow-md p-4 sm:p-6 md:p-8 bg-slate-300 w-96 m-5">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-lg mb-4 sm:w-full md:w-2/3"
      />
      <h3 className="text-2xl font-bold mb-2 sm:text-3xl md:text-4xl">
        {name}
      </h3>
      <p className="text-gray-500 sm:text-lg md:text-xl">Year: {modelYear}</p>
      <p className="text-gray-500 sm:text-lg md:text-xl">Cost: ₹{cost}</p>
    </div>
  );
};

export default BikeCard;
