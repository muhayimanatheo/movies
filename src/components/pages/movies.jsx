import React from "react";
import YouTubeIframe from "react-youtube-iframe";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MoviesFunc() {
  /*This object is used to play the detailed movies */
  const {id}= useParams();
  console.log(id);
  const [movieShow, setMovieShow] = useState([]);
  useEffect(() => {
    const showData = async () => {
      const playMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=498d5fb86f45e1f05cb32796f4d6f180`
      );
      console.log(playMovies.data.results[0]);
      setMovieShow(playMovies.data.results[0]);
    };
    showData();
  }, []);
  console.log(movieShow.key);
  return (
    <div>
      <p>
        <YouTubeIframe videoId={`${movieShow.key}`} />
        <br />
        
      </p>
    </div>
  );
}

export default MoviesFunc;
