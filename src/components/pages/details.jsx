import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailsFunc() {
  {
    /*Movies Details */
  }
  const { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const detailData = async () => {
      const respond = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=498d5fb86f45e1f05cb32796f4d6f180`
      );
      console.log(respond);
      setMovie(respond.data);
    };
    detailData();
  }, [id]);
  console.log(movie);
  return (
    <div className="flex mx-7 my-2">
      <Link to={`/movies/${movie.id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className=" w-64 "
          />
        </div>

        <div>
          <p className="text-black">
            {movie.title}
            <br />
            {movie.vote_average}
            <br />
            {movie.status}
            <br />
            {movie.overview}
            {/* <Link to={`/movies/${movie.id}`}>
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              Play
            </button>
          </Link> */}
          </p>
        </div>
        <button className="bg-black text-white font-bold py-2 px-4 rounded">
          Play
        </button>
      </Link>
    </div>
  );
}
export default DetailsFunc;
