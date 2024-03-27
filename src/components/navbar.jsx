import React from "react";
import { Link } from "react-router-dom";
import movielogo from "../images/movielogo.png"

function NavBar() {
    // const [toolsOpen, setToolsOpen] = useState(false);
    // const [channelsOpen, setChannelsOpen] = useState(false);

    return (
        <nav className="flex flex-wrap justify-between items-center py-4 px-6 bg-black">
    <div className="flex items-center justify-start">
        <Link to="/" className="flex items-center">
            <img src={movielogo} alt="movies logo" className="h-10 w-40" />
        </Link>
    </div>
    <div className="flex items-center justify-end mt-4 sm:mt-0">
        <Link to="/" className="text-white px-4 py-2 hover:text-[#1F35B3] font-bold">
            Home
        </Link>
        <Link to="/" className="text-white px-4 py-2 hover:text-[#1F35B3]">
            Explore
        </Link>
        <Link to="/" className="text-white px-4 py-2 hover:text-[#1F35B3]">
            Genre
        </Link>
        <Link to="/" className="text-white px-4 py-2 hover:text-[#1F35B3]">
            News
        </Link>
        <Link to="/" className="text-white px-4 py-2 hover:text-[#1F35B3]">
            Movies
        </Link>
        <Link to="/" className="text-white px-4 py-2 hover:text-[#1F35B3]">
            Tv Shows
        </Link>
    </div>
</nav>
    );
}
export default NavBar;
