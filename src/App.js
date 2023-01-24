import Header from "./components/header";
import "./App.css";
import MovieCards from "./components/moviecards";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [MovieList, SetMovieList] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      var response = await fetch("https://localhost:7265/api/Movie");
      if (response.ok) {
        var data = await response.json();
        console.log(data);
        SetMovieList(data);
      } else {
        console.log("Error fetching movies");
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="App_body">
      <Header />
      <div className="for_you">
        <p>
          <i>For You</i>
        </p>
      </div>
      {MovieList.length === 0 && <p>Fetching Movies</p>}
      {MovieList.length !== 0 && <MovieCards movies={MovieList} />}
    </div>
  );
}

export default App;
