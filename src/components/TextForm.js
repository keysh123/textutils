import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text="keya!!" --wrong way to change state
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () => {
    console.log("Upper case btn clicked");
    setText(text.toUpperCase());
  };
  const handleLoclick = () => {
    setText(text.toLowerCase());
  };
  const handleclear = () => {
    setText('');
  };
  const copyText = () => {
    var txt=document.getElementById('myBox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
  };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Textarea to write!!
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text to Clipboard
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclear}>
         CLEAR TEXT
        </button>
      </div>
      <div className="container my-3">
        <h4>Text Summary</h4>
        <p>words-{text.split(" ").length-1} &nbsp; &nbsp; characters-{text.length}</p>
        <p>Avg time to read (in minutes) : {text.split(" ").length*0.008}</p>
        <h5>Preview </h5>
        <p className="bg-secondary-subtle">{text}</p>
      </div>
    </>
  );
}
