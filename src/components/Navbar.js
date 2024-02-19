import { Link } from "react-router-dom";
import About from "./About"

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/about"></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;