import Card from "./card";
import { useState } from "react";
import "./moviecards.css";
function MovieCards(props) {
  const { movies } = props;
  const [SimilarMovies, SetSimilarMovies] = useState([]);
  return (
    <>
      <div className="similar">
        {SimilarMovies.length !== 0 && <span>You may also like </span>}
        <div className="similarMovies">
          {SimilarMovies.length !== 0 &&
            SimilarMovies.map((movie) => {
              return (
                <Card
                  key={movie.movieId}
                  id={movie.movieId}
                  title={movie.movieName}
                  genre1={movie.genre1}
                  genre2={movie.genre2}
                  rating={movie.rating}
                  similar={SetSimilarMovies}
                  showLike={false}
                />
              );
            })}
        </div>
      </div>
      <div className="moviecards">
        {movies.map((movie) => {
          return (
            <Card
              key={movie.movieId}
              id={movie.movieId}
              title={movie.movieName}
              genre1={movie.genre1}
              genre2={movie.genre2}
              rating={movie.rating}
              similar={SetSimilarMovies}
              showLike={true}
            />
          );
        })}
      </div>
    </>
  );
}
export default MovieCards;
