import { useEffect, useState } from "react";

function Explore() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const handlesearch = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=498d5fb86f45e1f05cb32796f4d6f180`
        );
        const data = await response.json();
        console.log(data);
        setData(data.results);
      } catch (error) {
        console.log("Failed to fetch", error);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm"
          value={query}
          onChange={(e) => handlesearch(e)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  {/* <p className="text-gray-600 text-base">{item.overview}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Explore;
