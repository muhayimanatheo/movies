import React from "react";
import { Link } from "react-router-dom";
import movielogo from "../images/movielogo.png";

function NavBar() {
  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-6 bg-black">
      <div className="flex items-center justify-start">
        <Link to="/" className="flex items-center">
          <img src={movielogo} alt="movies logo" className="h-10 sm:h-12 lg:h-16 w-auto" />
        </Link>
      </div>
      <div className="flex items-center justify-end mt-4 space-x-4 lg:space-x-8">
        <Link
          to="/"
          className="text-white hover:text-[#1F35B3] font-bold text-sm lg:text-base"
        >
          Home
        </Link>
        <Link to="/" className="text-white hover:text-[#1F35B3] text-sm lg:text-base">
          Explore
        </Link>
        <Link to="/" className="text-white hover:text-[#1F35B3] text-sm lg:text-base">
          Genre
        </Link>
        <Link to="/" className="text-white hover:text-[#1F35B3] text-sm lg:text-base">
          News
        </Link>
        <Link to="/" className="text-white hover:text-[#1F35B3] text-sm lg:text-base">
          Movies
        </Link>
        <Link to="/" className="text-white hover:text-[#1F35B3] text-sm lg:text-base">
          Tv Shows
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
