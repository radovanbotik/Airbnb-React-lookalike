import group from "../assets/Images/group.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero--image">
        <img src={group} alt="hero-image" />
      </div>
      <article>
        <h2 className="hero--title">Online Experiences</h2>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </article>
    </section>
  );
}
