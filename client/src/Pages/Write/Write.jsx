import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="write_image"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write_form">
        <div className="write_form-group">
          <label htmlFor="fileInput">
            <i class="write_icon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write_input"
            autoFocus={true}
          />
        </div>
        <div className="write_form-group">
          <textarea
            placeholder="Enter your story..."
            typeof="text"
            className="write_input write_text"
          ></textarea>
        </div>
        <button className="write_submit">Publish</button>
      </form>
    </div>
  );
}
