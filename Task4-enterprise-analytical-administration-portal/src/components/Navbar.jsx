import { Link } from "react-router-dom";

function Navbar({ isDark, handleThemeClick }) {
  return (
    <nav className="navbar">
      <h2>My Analytics Portal</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/table">Data Table</Link>

        <button onClick={handleThemeClick}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
