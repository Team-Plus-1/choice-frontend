import React, { useState } from "react";
import "./Report.css";

function Report() {
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("none");
  const [story, setStory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // db.collection("submissions")
    //   .add({
    //     link: link,
    //     category: category,
    //     story: story,
    //   })
    //   .then(() => {
    //     alert("Message has been submitted");
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    // setLink("");
    // setCategory("none");
    // setStory("");
  };

  return (
    <div className="Report">
      <h1 className="report__heading">Report a Video</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* onSubmit={sendEmail} */}
        <div className="form__element">
          <label className="report__label">Link to the video</label>
          <input
            required
            className="report__input"
            type="text"
            placeholder="Link..."
            name="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          ></input>
        </div>
        <div className="form__element">
          <label className="report__label">Story behind the video</label>
          <textarea
            required
            className="report__input"
            type="text"
            placeholder="Your Story..."
            name="story"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form__element">
          <label className="report__label">
            Select the category of the video
          </label>
          <select
            required
            className="report__input"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option className="custom-option" value="none" selected="selected">
              {" "}
              -- choose one --
            </option>
            <option className="custom-option" value="nonconsensual">
              Non-Consensual
            </option>
            <option className="custom-option" value="blackmail">
              Blackmail
            </option>
            <option className="custom-option" value="leaked">
              Leaked
            </option>
            <option className="custom-option" value="other">
              Other
            </option>
          </select>
        </div>
      </form>
      <div className="form__btn">
        <input
          className="report__btn"
          type="submit"
          value="Report Video"
        ></input>
      </div>
    </div>
  );
}

export default Report;
