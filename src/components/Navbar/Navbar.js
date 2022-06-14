import "./Navbar.css";
import navpic from "../../assets/remember.jpg";

const Navbar = () => {
  return (
    <div className="navbar-cr">
      <div className="img-cr">
        <img className="nav-img" src={navpic} alt="nav-cat" />
      </div>
      <div className="nav-text-1">
        <h2>Welcome to&nbsp;</h2>
      </div>
      <div className="nav-text-2">
        <h2>Cat Api</h2>
      </div>
    </div>
  );
};

export default Navbar;
