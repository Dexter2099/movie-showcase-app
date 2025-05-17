const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded overflow-hidden shadow-md hover:shadow-lg transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.Title}</h2>
        <p className="text-gray-400 text-sm">📅 {movie.Year}</p>
        <p className="text-gray-400 text-sm mt-2">🎞 IMDb ID: {movie.imdbID}</p>
      </div>
    </div>
  );
};

export default MovieCard;
