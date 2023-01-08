import Card from "./card";
import "./moviecards.css";
function MovieCards(props) {
  const { movies } = props;
  return (
    <div className="moviecards">
      {movies.map((movie) => {
        return (
          <Card
            key={movie.MovieId}
            id={movie.MovieId}
            title={movie.MovieName}
            genre={movie.Genre1}
            rating={movie.Rating}
          />
        );
      })}
    </div>
  );
}
export default MovieCards;
