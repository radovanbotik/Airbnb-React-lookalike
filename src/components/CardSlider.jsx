import Card from "./Card";
import CardData from "../data";

export default function CardSlider() {
  const cards = CardData.map((entry, index) => {
    return (
      <Card
        key={index}
        img={entry.coverImg}
        price={entry.price}
        rating={entry.stats.rating}
        reviewcount={entry.stats.reviewcount}
        title={entry.title}
        location={entry.location}
        badge={entry.openSpots}
      />
    );
  });
  console.log(cards);
  return <div className="card-slider">{cards}</div>;
}
