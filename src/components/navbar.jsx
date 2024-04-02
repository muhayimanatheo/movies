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
    <nav className="flex flex-wrap justify-between items-center py-4 px-6 bg-black">
      <div className="flex items-center justify-start">
        <Link to="" className="flex items-center text-white">
          <div>
            <img
              src={movielogo}
              alt="movies logo"
              className="h-10 sm:h-12 lg:h-16 w-auto"
            />
          </div>
        </Link>
        {/* <div className="relative mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="absolute -right-2 -top-2 mt-2 mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 h-full"
          >
            <svg
              class=" w-16 h-16 text-white  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div> */}
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
