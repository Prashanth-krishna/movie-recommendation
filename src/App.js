import Header from "./components/header";
import "./App.css";
import MovieCards from "./components/moviecards";

const MovieList = [
  {
    id: 1,
    title: "dune",
    genre: "sci-fi",
    rating: "9",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "sci-fi", "thriller"],
  },
  {
    id: 2,
    title: "inception",
    genre: "sci-fi",
    rating: "9.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "sci-fi", "thriller"],
  },
];

function App() {
  return (
    <div className="App_body">
      <Header />
      <div className="for_you">
        <p>
          <i>For You</i>
        </p>
      </div>
      <MovieCards movies={MovieList} />
    </div>
  );
}

export default App;
