import Card from "./card";
import "./moviecards.css";
function MovieCards(props) {
  const { movies } = props;
  return (
    <div className="moviecards">
      {movies.map((movie) => {
        return (
          <Card
            key={movie.movieId}
            id={movie.movieId}
            title={movie.movieName}
            genre={movie.genre1}
            rating={movie.rating}
          />
        );
      })}
    </div>
  );
}
export default MovieCards;
