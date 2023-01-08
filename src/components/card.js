import { useState } from "react";
import "./card.css";
function Card(props) {
  const { id, title, genre, rating } = props;
  const [MovieDetails, SetMovieDetails] = useState([]);
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
    var response = await fetch(`https://localhost:7023/api/Movie/${id}`);
    if (response.ok) {
      var data = await response.json();
      console.log(data);
      SetMovieDetails(data);
    } else {
      console.log(`Error fetching movie ${id}`);
    }
  };

  return (
    <div className="moviecard" onClick={OnClickHandler}>
      <div className="movieimg">
        {/* <img src={require(`./../components/assets/${src}`)} alt="imageposter" /> */}
        {/* <img src={img} alt="imageposter" /> */}
      </div>
      <div className="movieinfo">
        <h4>{title}</h4>
        <small>{genre}</small>
        <small>Rating : {rating}</small>
        {MovieDetails.length !== 0 && (
          <>
            <small>
              Directed By : <span>{MovieDetails[0].Director}</span>
            </small>
            <small>
              Starring : {MovieDetails[0].Actor1}, {MovieDetails[0].Actor2},{" "}
              {MovieDetails[0].Actor3}
            </small>
          </>
        )}
      </div>
    </div>
  );
}
export default Card;
