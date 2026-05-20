import React, { useState, useEffect } from "react";
import moviesData from "./movies.json";
import Filter from "./COMPONENTS/Filter";
import MovieList from "./COMPONENTS/MovieList";
import Navbar from "./COMPONENTS/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  // Load movies when app starts
  useEffect(() => {
    setMovies(moviesData);
    setFilteredMovies(moviesData);
  }, []);

  // Filter movies
  const handleFilter = ({ title, rating }) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= Number(rating));
    }

    setFilteredMovies(filtered);
  };

  // Add new movie
  const handleAddMovie = () => {
    if (
      !newMovie.title ||
      !newMovie.description ||
      !newMovie.posterURL ||
      !newMovie.rating
    ) {
      alert("Please fill all fields!");
      return;
    }

    const movieToAdd = {
      id: movies.length + 1,
      ...newMovie,
      rating: Number(newMovie.rating),
    };

    const updatedMovies = [...movies, movieToAdd];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);

    // Clear form
    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  return (
    <div className="app p-5">
      <Navbar />
      <header className="text-center mb-8 p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl">
        <h1 className="text-4xl font-bold">My Movie Collection</h1>
      </header>

      <main>
        {/* Filter Section */}
        <section className="filter-section">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Filter Movies
          </h2>
          <Filter onFilter={handleFilter} />
        </section>

        {/* Add Movie Section */}
        <section className="add-movie">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Add New Movie
          </h2>
          <div className="add-movie-form flex flex-col gap-3 max-w-md">
            <input
              type="text"
              placeholder="Movie Title"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={newMovie.title}
              onChange={(e) =>
                setNewMovie({ ...newMovie, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={newMovie.description}
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Poster URL"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={newMovie.posterURL}
              onChange={(e) =>
                setNewMovie({ ...newMovie, posterURL: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Rating (0-10)"
              min="0"
              max="10"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={newMovie.rating}
              onChange={(e) =>
                setNewMovie({ ...newMovie, rating: e.target.value })
              }
            />
            <button
              onClick={handleAddMovie}
              className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Add Movie
            </button>
          </div>
        </section>

        {/* Movies Display Section */}
        <section className="movies-section">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Movies ({filteredMovies.length})
          </h2>
          <MovieList movies={filteredMovies} />
        </section>
      </main>
    </div>
  );
}

export default App;
