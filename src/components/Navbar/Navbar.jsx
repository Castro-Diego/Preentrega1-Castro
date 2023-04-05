import CartWiget from "../CarWidget/CartWidget";
import "./Navbar.css";
import logo from "../../assets/image (2).png";

export const Navbar = () => {
  return (
    <div className="container-navbar">
      <img src={logo} alt="LOGO" />
      <h2>Absolut relojes</h2>
      <a href="">Elegantes</a>
      <a href="">Urbanos</a>
      <a href="">Night</a>
      <a href="">Contacto</a>
      <CartWiget />
    </div>
  );
};
