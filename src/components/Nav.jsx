import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <i className="fas fa-bars"></i>
      <ul className="hidden--mobile nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/submitRecipe">Submit</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
