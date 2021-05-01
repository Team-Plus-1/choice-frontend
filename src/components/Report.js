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
    <div className="ReportPage">
      <div className="container">
        <h1 className="report__heading">
          <font color="red">Report</font> Content
        </h1>
        <form className="form" onSubmit={handleSubmit}>
          {/* onSubmit={sendEmail} */}
          <div className="form__element">
            <label className="report__label">Link Of The Video</label>
            <input
              required
              className="report__input"
              type="text"
              placeholder="Link..."
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            ></input>
          </div>
          <div className="form__element">
            <label className="report__label">Story Behind The Video</label>
            <textarea
              required
              className="report__input2"
              type="text"
              placeholder="Your Story..."
              name="story"
              value={story}
              onChange={(e) => setStory(e.target.value)}
            ></textarea>
          </div>
          <div className="form__element">
            <label className="report__label">Choose Video Category</label>
            <select
              required
              className="report__input"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option
                className="custom-option"
                value="none"
                selected="selected"
              >
                {" "}
                -- Choose One --
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
        <empty className="empty"></empty>
      </div>
    </div>
  );
}
export default Report;
