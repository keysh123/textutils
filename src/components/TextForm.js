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
    props.alert("converted to upper case","success");
  };
  const handleLoclick = () => {
    setText(text.toLowerCase());
    props.alert("converted to lower case","success");
  };
  const handleclear = () => {
    setText('');
    props.alert("cleared","danger");
  };
  const copyText = () => {
    var txt=document.getElementById('myBox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.alert("copied successfully","success");
  };
  const giveclass = () =>{
    // console.log(props.mode+"  joo ");
    if(props.mode==='red'){
      return "danger";
    }
    else if(props.mode==='blue'){
      return "primary";
    }
    else if(props.mode==='green'){
      return 'success';
    }
    else{
      return "primary";
    }
  }
  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
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
            style={{backgroundColor:props.mode==='light'?'white':'rgb(123 123 123)',color:props.mode==='light'?'rgb(123 123 123)':'white'}}  
          ></textarea>
        </div>
        <button className={`btn btn-${giveclass()} mx-2`} onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className={`btn btn-${giveclass()} mx-2`} onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button className={`btn btn-${giveclass()} mx-2`} onClick={copyText}>
          Copy Text to Clipboard
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclear}>
         CLEAR TEXT
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h4>Text Summary</h4>
        <p>words-{text.split(" ").length-1} &nbsp; &nbsp; characters-{text.length}</p>
        <p>Avg time to read (in minutes) : {(text.split(" ").length-1)*0.008}</p>
        <h5>Preview </h5>
        <p className="bg-secondary-subtle text-dark">{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
