export default function Card(props) {
  const { location, coverImg: img, price, stats, title, badge } = props;
  const { rating, reviewCount } = stats;
  return (
    <div className="card">
      <img src={`.././public/images/${img}`} alt="" className="card--image" />
      <div className="card--label">{badge ? "avaible" : "sold out"}</div>
      {/* {badge ? null : <div className="card--label">sold out</div>} */}
      <article className="card_info">
        <div className="rating">
          <img
            src=".././public/images/star.png"
            alt=""
            className="rating--icon"
          />
          <span className="rating--userrating">{rating}</span>
          <span className="rating--usercount">({reviewCount})</span>
          <span className="rating--country">{location}</span>
        </div>
        <p className="service">{title}</p>
        <div className="price">
          <span className="price--perperson">
            From <span id="price">${price}</span>
          </span>
          <span>/</span>
          <span className="price--personcount">person</span>
        </div>
      </article>
    </div>
  );
}
