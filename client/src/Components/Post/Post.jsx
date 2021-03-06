import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.photo && (
        <img className="post_image" src={PF + post.photo} alt="" />
      )}
      <div className="post_info">
        <div className="post_categories">
          <span className="post_category">
            {post.categories.map((c) => (
              <span className="post_category">{c}</span>
            ))}
          </span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="post_title">{post.title}</span>
        </Link>
        <div className="">•</div>
        <span className="post_date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post_description">{post.desc}</p>
    </div>
  );
}
