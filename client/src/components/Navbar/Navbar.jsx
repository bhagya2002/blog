import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = false;

  return (
    // Navbar
    <div className="nav">
      {/* Left side of nav (social media handles */}
      <div className="nav_left">
        <i class="nav_left-icon fab fa-facebook-f"></i>
        <i class="nav_left-icon fab fa-twitter"></i>
        <i class="nav_left-icon fab fa-pinterest-p"></i>
        <i class="nav_left-icon fab fa-instagram"></i>
      </div>

      {/* Center of nav (links to other pages */}
      <div className="nav_center">
        <ul className="nav_list">
          <li className="nav_list-item">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="nav_list-item">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="nav_list-item">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="nav_list-item">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="nav_list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>

      {/* Right side of nav (login, account, search) */}
      <div className="nav_right">
        {user ? (
          <Link className="link" to="/settings">
            <i class="nav_image fas fa-user"></i>
          </Link>
        ) : (
          <ul className="nav_list">
            <li className="nav_list-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="nav_list-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {/* search */}
        <i class="nav_right-icon fas fa-search"></i>
      </div>
    </div>
  );
}
