import "./navbar.css";

export default function Navbar() {
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
          <li className="nav_list-item">HOME</li>
          <li className="nav_list-item">ABOUT</li>
          <li className="nav_list-item">CONTACT</li>
          <li className="nav_list-item">WRITE</li>
          <li className="nav_list-item">LOGOUT</li>
        </ul>
      </div>

      {/* Right side of nav (login, account, search) */}
      <div className="nav_right">
        {/* search */}
        <i class="nav_right-icon fas fa-search"></i>
        {/* account image */}
        <i class="nav_image fas fa-user"></i>
      </div>
    </div>
  );
}
