import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="post_image"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="post_info">
        <div className="post_categories">
          <span className="post_category">Music</span>
          <span className="post_category">Life</span>
        </div>
        <span className="post_title">{post.title}</span>
        <hr />
        <span className="post_date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post_description">{post.desc}</p>
    </div>
  );
}
