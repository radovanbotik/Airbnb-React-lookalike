import image from "../assets/Images/image12.png";
import icon from "../assets/Images/Star.png";

export default function Card() {
  return (
    <div className="card">
      <img src={image} alt="" className="card--image" />
      <div className="card--label">sold out</div>
      <article className="card_info">
        <div className="rating">
          <img src={icon} alt="" className="rating--icon" />
          <span className="rating--userrating">5.0</span>
          <span className="rating--usercount">(6)</span>
          <span className="rating--country">USA</span>
        </div>
        <p className="service">Life lessons with Katie Zaferes</p>
        <div className="price">
          <span className="price--perperson">
            From <span id="price">$136</span>
          </span>
          <span>/</span>
          <span className="price--personcount">person</span>
        </div>
      </article>
    </div>
  );
}
