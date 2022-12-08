import Card from "./card";
import "./moviecards.css";
function MovieCards(props) {
  const { movies } = props;
  return (
    <div className="moviecards">
      {movies.map((movie) => {
        return (
          <Card
            key={movie.id}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            src={movie.src}
          />
        );
      })}
    </div>
  );
}
export default MovieCards;
