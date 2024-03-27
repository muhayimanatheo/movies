import React, { useState, useEffect } from "react";
import axios from "axios";

import guardian from "../../images/guardian.png";
import spiderman from "../../images/spiderman.png";
import Mask from "../../images/Mask.png";
import Play from "../../images/Play.png";
import Card from "../pages/card";
import { NavLink } from "react-router-dom";

function HomeFunc() {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=498d5fb86f45e1f05cb32796f4d6f180"
        );
        if (response.data && response.data.results) {
          setUserdata(response.data.results);
          console.log(response.data);
        } else {
          console.log("Error: Invalid API response");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);
  // Empty dependency array to run the effect only once

  return (
    <main className="">
      <div className="flex">
        <div className="py-5 my-24 mx-8">
          <h1 className="text-white font-bold text-3xl">FIND MOVIES</h1>
          <span className="bg-gradient-to-r from-blue-600 to-[#C40D60] inline-block text-transparent bg-clip-text font-bold text-5xl">
            TV SHOWS AND MORE
          </span>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur.
            <br />
            Accusantium, autem, consequuntur, corporis, delectus, doloremque,
            <br />
            facere, fugiat, harum, iusto, libero, magni, maxime, nobis, nobis,
          </p>
          <button
            type="button"
            className="flex text-white border-2 border-white my-5 items-center"
          >
            <img src={Play} alt="Play" className="w-10 h-10 mr-2 mx-1 " />
            <span className="text-sm mx-2">Watch Tutorial</span>
          </button>
        </div>
        <div className="w-[500px] relative">
          <div className="absolute w-[300px] top-0 right-0">
            <img src={spiderman} alt="spiderman" className="w-full h-auto" />
          </div>
          <div className="absolute w-[300px] top-[50px] right-[70px]">
            <img src={guardian} alt="guardian" className="w-full h-auto" />
          </div>
        </div>
      </div>
      {/* {This is line that containing more movies } */}
      <span className="flex mx-5">
        <div className="">
          <img src={Mask} alt="Mask" className="w-full h-auto" />
        </div>
        <div className="">
          <p className="text-white">Trending</p>
        </div>
        <div className="border-t border-gray-300 my-4 w-[65rem] mx-2"></div>
        <div className="">
          <p className="text-white">See More</p>
        </div>
      </span>
      <section className="flex items-center justify-start my-5 mx-5">
        <div className="grid grid-cols-6 py-24 px-8 space-x-1 space-y-2">
          {userdata.map((movie, index) => (
            <NavLink key={index} to={`/explore/${movie.id}`}>
              <Card
                Title={movie.title}
                Time={movie.vote_count}
                Overview={movie.overview}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </NavLink>
          ))}
        </div>
      </section>
    </main>
  );
}
export default HomeFunc;
