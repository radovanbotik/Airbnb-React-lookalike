import icon from "../assets/Images/Star.png";

export default function Card(props) {
  const { location, img, price, rating, reviewcount, description } = props;
  return (
    <div className="card">
      <img src={`.././public/images/${img}`} alt="" className="card--image" />
      <div className="card--label">sold out</div>
      <article className="card_info">
        <div className="rating">
          <img src={icon} alt="" className="rating--icon" />
          <span className="rating--userrating">{rating}</span>
          <span className="rating--usercount">({reviewcount})</span>
          <span className="rating--country">{location}</span>
        </div>
        <p className="service">{description}</p>
        <div className="price">
          <span className="price--perperson">
            From <span id="price">{price}</span>
          </span>
          <span>/</span>
          <span className="price--personcount">person</span>
        </div>
      </article>
    </div>
  );
}
