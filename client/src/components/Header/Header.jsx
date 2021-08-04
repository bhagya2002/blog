import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_titles-title-small"> </span>
        <span className="header_titles-title-large">Tech Blog & More</span>
      </div>
      <img
        className="header_image"
        src="https://isaiahcounselingandwellness.com/wp-content/uploads/2018/06/Tryzens-Blog-Page-Banner.jpg"
        alt=""
      />
    </div>
  );
}
