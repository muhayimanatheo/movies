import React from "react";

function Card({ Title, Year, Time, src }) {
  return (
    <div className="w-[13rem] px-4 border-1 border-white">
      <img src={src} className="w-full h-auto object-cover my-3 sm:w-64 sm:h-auto" />
      <h1 className="text-white">{Title}</h1>
      <p className="text-white">{Year}</p>
      <p className="text-white">{Time}</p>
    </div>
  );
}
export default Card;
