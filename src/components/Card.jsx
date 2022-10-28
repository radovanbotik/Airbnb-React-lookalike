import icon from "../assets/Images/Star.png";

export default function Card(props) {
  const { country, img, price, rating, reviewcount, title } = props;
  return (
    <div className="card">
      <img src={img} alt="" className="card--image" />
      <div className="card--label">sold out</div>
      <article className="card_info">
        <div className="rating">
          <img src={icon} alt="" className="rating--icon" />
          <span className="rating--userrating">{rating}</span>
          <span className="rating--usercount">{reviewcount}</span>
          <span className="rating--country">{country}</span>
        </div>
        <p className="service">{title}</p>
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
