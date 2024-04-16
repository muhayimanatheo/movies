import { useState } from "react";
import { Link } from "react-router-dom";
import movielogo from "../images/movielogo.png";
// import { Search } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" sticky top-0 flex flex-wrap justify-between items-center py-4 px-2 bg-black">
      <div className=" flex items-center justify-start">
        <Link to="" className="flex items-center text-white">
          <div>
            <img
              src={movielogo}
              alt="movies logo"
              className="h-10 sm:h-12 lg:h-16 w-auto"
            />
          </div>
        </Link>
        
      </div>

      <div className="lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`lg:flex ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="flex items-center justify-end mt-4 space-x-4 lg:space-x-8">
          <Link
            to="/"
            className="text-white hover:text-[#1F35B3] font-bold text-sm lg:text-base"
          >
            Home
          </Link>
          <Link
            to="explore"
            className="text-white hover:text-[#1F35B3] text-sm lg:text-base"
          >
            Explore
          </Link>
          <Link
            to=""
            className="text-white hover:text-[#1F35B3] text-sm lg:text-base"
          >
            Genre
          </Link>
          <Link
            to=""
            className="text-white hover:text-[#1F35B3] text-sm lg:text-base"
          >
            News
          </Link>
          <Link
            to=""
            className="text-white hover:text-[#1F35B3] text-sm lg:text-base"
          >
            Movies
          </Link>
          <Link
            to=""
            className="text-white hover:text-[#1F35B3] text-sm lg:text-base"
          >
            Tv Shows
          </Link>
          <Link
            to="login"
            className="text-white hover:text-[#1F35B3] text-sm lg:text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
