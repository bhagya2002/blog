import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_item">
        <span className="sidebar_item-title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_item-title">CATEGORIES</span>
        <ul className="sidebar_list">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebar_item">
        <span className="sidebar_item-title">FOLLOW US</span>
        <div className="sidebar_social">
          <i class="sidebar_icon fab fa-facebook-f"></i>
          <i class="sidebar_icon fab fa-twitter"></i>
          <i class="sidebar_icon fab fa-pinterest-p"></i>
          <i class="sidebar_icon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
