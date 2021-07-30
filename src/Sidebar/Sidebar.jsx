import "./sidebar.css";

export default function Sidebar() {
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
          <li className="sidebar_list-item">Life</li>
          <li className="sidebar_list-item">Music</li>
          <li className="sidebar_list-item">Style</li>
          <li className="sidebar_list-item">Sports</li>
          <li className="sidebar_list-item">Tech</li>
          <li className="sidebar_list-item">Cinema</li>
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
