import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard";

function App() {
  const [search, setSearch] = useState("mad max");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/movies?search=${query}`);
      setMovies(res.data);
      setError("");
    } catch (err) {
      setMovies([]);
      setError("No results found.");
    }
  };

  useEffect(() => {
    fetchMovies(search);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    fetchMovies(search);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">🎬 Action Movie Showcase</h1>
      
      <form onSubmit={handleSubmit} className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="w-1/2 p-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
        <button type="submit" className="bg-red-600 px-4 py-2 rounded-r hover:bg-red-500 transition">
          Search
        </button>
      </form>

      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
