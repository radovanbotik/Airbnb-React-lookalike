import logo from "../assets/Images/logo.png";

export default function Navigation() {
  return (
    <nav>
      <div className="navigation--logo">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}
