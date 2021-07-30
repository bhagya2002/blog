import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlepost_wrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlepost_image"
        />
        <h1 className="singlepost_title">
          Lorem ipsum dolor sit amet
          <div className="singlepost_edit">
            <i className="singlepost_icon far fa-edit"></i>
            <i className="singlepost_icon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlepost_info">
          <span className="singlepost_author">
            Author: <b>Bhagya</b>
          </span>
          <span className="singlepost_date">1 Hour Ago</span>
        </div>
        <p className="singlepost_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestiae
          repellat, sequi necessitatibus asperiores voluptatibus aliquam velit
          sunt quos sapiente, fuga, esse ducimus. Tenetur quo qui ducimus,
          maiores deserunt atque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ut molestiae repellat, sequi necessitatibus
          asperiores voluptatibus aliquam velit sunt quos sapiente, fuga, esse
          ducimus. Tenetur quo qui ducimus, maiores deserunt atque! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ut molestiae repellat,
          sequi necessitatibus asperiores voluptatibus aliquam velit sunt quos
          sapiente, fuga, esse ducimus. Tenetur quo qui ducimus, maiores
          deserunt atque! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut molestiae repellat, sequi necessitatibus asperiores
          voluptatibus aliquam velit sunt quos sapiente, fuga, esse ducimus.
          Tenetur quo qui ducimus, maiores deserunt atque! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ut molestiae repellat, sequi
          necessitatibus asperiores voluptatibus aliquam velit sunt quos
          sapiente, fuga, esse ducimus. Tenetur quo qui ducimus, maiores
          deserunt atque!
        </p>
      </div>
    </div>
  );
}
