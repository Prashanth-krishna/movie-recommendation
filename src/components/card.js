import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./card.css";
function Card(props) {
  const { id, title, genre1, genre2, rating, similar, showLike } = props;
  const [MovieDetails, SetMovieDetails] = useState([]);
  // const [SimilarMovies, SetSimilarMovies] = useState([]);
  const [isFavorite, SetIsFavorite] = useState(false);
  // const GetOtherMovies = async () => {
  //   var response = await fetch(`https://localhost:7023/api/Director/${id}`);
  //   if (response.ok) {
  //     var data = await response.json();
  //     console.log(data);
  //     // SetMovieDetails(data);
  //   } else {
  //     console.log(`Error fetching director ${id}`);
  //   }
  // };
  const OnClickHandler = async () => {
    var response = await fetch(`https://localhost:7265/api/Movie/${id}`);
    if (response.ok) {
      var data = await response.json();
      console.log(data);
      SetMovieDetails(data);
    } else {
      console.log(`Error fetching movie ${id}`);
    }
  };
  const FavoriteHandler = async () => {
    SetIsFavorite(true);
    var response = await fetch(
      `https://localhost:7265/api/Movie/GetMovieByGenre?genre1=${genre1}&genre2=${genre2}`
    );
    var data = await response.json();
    // console.log(data);
    let movieArray = [];
    let movieArray2 = [];
    data.forEach((movie) => {
      if (movie.movieId === id) {
      } else if (
        (movie.genre1 === genre1 && movie.genre2 === genre2) ||
        (movie.genre1 === genre2 && movie.genre2 === genre1)
      ) {
        movieArray.push(movie);
      } else {
        movieArray2.push(movie);
      }
    });
    movieArray2 = movieArray2.sort((a, b) => b.rating - a.rating);
    movieArray = movieArray.sort((a, b) => b.rating - a.rating);
    movieArray = movieArray.concat(movieArray2);
    // SetSimilarMovies(movieArray);
    similar(movieArray);
    // console.log(movieArray);
  };

  return (
    <div className="moviecard">
      <div className="movieimg">
        {!isFavorite && showLike && (
          <FavoriteBorderIcon
            style={{ fill: "rgb(125, 44, 199)" }}
            onClick={FavoriteHandler}
          />
        )}

        {isFavorite && showLike && (
          <FavoriteIcon style={{ fill: "rgb(125, 44, 199)" }} />
        )}
        {/* <img src={require(`./../components/assets/${src}`)} alt="imageposter" /> */}
        {/* <img src={img} alt="imageposter" /> */}
      </div>
      <div className="movieinfo">
        <h4 onClick={OnClickHandler}>{title}</h4>
        <small>
          {genre1}, {genre2}
        </small>
        <small>Rating : {rating}</small>
        {MovieDetails.length !== 0 && (
          <>
            <small>
              <u>Director</u>
              <br /> <span>{MovieDetails.directorName}</span>
            </small>
            <small>
              <u>Starring</u>
              <br />
              {MovieDetails.actors.map((actor) => {
                return (
                  <span id={actor.actorId} key={actor.actorId}>
                    {actor.actorName}
                    <br />
                  </span>
                );
              })}
            </small>
          </>
        )}
      </div>
    </div>
  );
}
export default Card;
