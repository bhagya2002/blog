import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_titles-title-small">
          Spreading Common Awareness & News
        </span>
        <span className="header_titles-title-large">Blog</span>
      </div>
      <img
        className="header_image"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
