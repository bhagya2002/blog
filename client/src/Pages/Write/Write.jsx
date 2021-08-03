import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../Context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="write_image" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="write_form" onSubmit={handleSubmit}>
        <div className="write_form-group">
          <label htmlFor="fileInput">
            <i class="write_icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="write_input"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            className="write_input"
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <div className="write_form-group">
          <textarea
            placeholder="Enter your story..."
            typeof="text"
            className="write_input write_text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="write_submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
