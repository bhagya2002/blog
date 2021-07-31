import "./post.css";

export default function Post() {
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
        <span className="post_title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post_date">1 hour ago</span>
      </div>
      <p className="post_description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
        excepturi? Eos error modi officia tenetur molestiae temporibus dicta,
        soluta enim laborum iusto exercitationem? Quisquam fugit animi aliquam
        magni enim harum!
      </p>
    </div>
  );
}
