import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({handleWatchTime}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data)
    });
  }, []);
  return (
    <div>
      <div className="movie__container row">
        {movies.map((movie) => (
          <SingleCard 
          key = {movie.movieName}
          handleWatchTime={handleWatchTime}
          movie={movie}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
