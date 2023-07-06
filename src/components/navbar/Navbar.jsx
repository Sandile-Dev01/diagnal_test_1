import "./nav.css";
import Back from "../../assets/back.png";
import Search from "../../assets/search.png";

const Navbar = () => {
  return (
    <nav>
      <div className="back_text_container">
        <picture>
          <img src={Back} alt="" />
        </picture>
        <h1>Romantic Comedy</h1>
      </div>
      <picture>
        <img src={Search} alt="" />
      </picture>
    </nav>
  );
};

export default Navbar;
