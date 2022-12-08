import "./card.css";
function Card(props) {
  const { title, genre, rating, src } = props;
  //   const img = require(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${title}`);
  return (
    <div className="moviecard">
      <div className="movieimg">
        <img src={require(`./../components/assets/${src}`)} alt="imageposter" />
        {/* <img src={img} alt="imageposter" /> */}
      </div>
      <div className="movieinfo">
        <p>{title}</p>
        <p>{genre}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
}
export default Card;
