import "./card.css";
function Card(props) {
  const { title, genre, rating } = props;
  return (
    <div className="moviecard">
      <p>{title}</p>
      <p>{genre}</p>
      <p>{rating}</p>
    </div>
  );
}
export default Card;
