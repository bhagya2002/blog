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
          src="https://thumbs.dreamstime.com/b/blog-articles-abstract-concept-vector-illustration-menu-element-subscribe-publications-news-article-company-website-page-web-195088232.jpg"
          alt=""
        />
        <p className="sidebar_item-text">
          I am a software engineering intern, currently working at DevFacto
          Technologies where I am closely working with clients to meet
          stakeholder requirements.
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
        <span className="sidebar_item-title">LET'S CONNECT</span>
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
