import Card from "./Card";
import image from "../assets/Images/Image12.png";

export default function CardSlider() {
  return (
    <div className="card-slider">
      <Card
        img={image}
        rating={"5.0"}
        reviewcount={6}
        country={"Canada"}
        title={"Life lessons with Katie Zaferes"}
        price={136}
      />
      <Card />
    </div>
  );
}
