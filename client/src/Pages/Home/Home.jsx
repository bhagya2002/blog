import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />

      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
