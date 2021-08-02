import "./singlepost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  // const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlepost_wrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlepost_image" />
        )}
        <h1 className="singlepost_title">
          {post.title}
          <div className="singlepost_edit">
            <i className="singlepost_icon far fa-edit"></i>
            <i className="singlepost_icon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlepost_info">
          <span className="singlepost_author">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlepost_date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlepost_description">{post.desc}</p>
      </div>
    </div>
  );
}
