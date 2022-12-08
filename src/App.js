import Header from "./components/header";
import "./App.css";
import MovieCards from "./components/moviecards";

const MovieList = [
  {
    id: 1,
    title: "Dune",
    genre: "sci-fi",
    rating: "9",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "sci-fi", "thriller"],
    src: "dune.jpg",
  },
  {
    id: 2,
    title: "Inception",
    genre: "sci-fi",
    rating: "9.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "sci-fi", "thriller"],
    src: "dune.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "sci-fi",
    rating: "9.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "sci-fi", "thriller"],
    src: "dune.jpg",
  },
  {
    id: 4,
    title: "Training Day",
    genre: "crime",
    rating: "9",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "crime", "thriller"],
    src: "dune.jpg",
  },
  {
    id: 5,
    title: "The Hateful Eight",
    genre: "crime",
    rating: "9.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "crime", "thriller"],
    src: "dune.jpg",
  },
  {
    id: 6,
    title: "Before Sunrise",
    genre: "romance",
    rating: "9.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "romance"],
    src: "dune.jpg",
  },
  {
    id: 7,
    title: "Baby Driver",
    genre: "crime",
    rating: "9.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "crime", "thriller"],
    src: "dune.jpg",
  },
  {
    id: 8,
    title: "Harold and Kumar",
    genre: "comedy",
    rating: "7.5",
    whereToWatch: "Amazon Prime",
    tags: ["drama", "comedy"],
    src: "dune.jpg",
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
