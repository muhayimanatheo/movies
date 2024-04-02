import React, { useEffect, useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, [query]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const results = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=498d5fb86f45e1f05cb32796f4d6f180`
      );
      const data = await results.json();
      console.log(results);
      setData(data.results);
    } catch (error) {
      console.log("Failed to fetch");
    }
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="border border-gray-400 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Search
        </button>
      </form>
      {query && (
        <div className="grid lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              date={item.vote_average}
              vote={item.vote_count}
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
