import Card from "./Card";
import CardData from "../data";

export default function CardSlider() {
  const cards = CardData.map((entry, index) => {
    return <Card key={index} {...entry} />;
  });
  return <div className="card-slider">{cards}</div>;
}
