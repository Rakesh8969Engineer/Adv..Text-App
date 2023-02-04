import React, { useState } from "react";

export default function Textform(props) {
  const handlueupclick = () => {
    console.log(" convert uppercase uppercase click succeses" + text);
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const lowercase = () => {
    let lowtext = text.toLowerCase();
    settext(lowtext);
  };

  const clearbox = () => {
    let emptext = "";
    settext(emptext);
  };

  const handleonchange = (event) => {
    console.log("hii this is for onchange");
    settext(event.target.value);
  };

  const handlecopy = () => {
    var text = document.getElementById("mytextbox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeextraspace = () => {
    let newTExt = text.split(/[ ]+/);

    settext(newTExt.join(" "));
  };

  const [text, settext] = useState("");
  //
  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1>{props.heading}</h1>

      <div className="form-group">
        <textarea
          className="form-control"
          value={text}
          onChange={handleonchange}
          id="mytextbox"
          rows="10"


       




          style={{ backgroundColor: props.mode === "light" ? "white" : "grey",color:   props.mode==='dark'?'white':'black'         }}
        ></textarea>
      </div>

      <button className="btn btn-primary  " onClick={handlueupclick}>
        Convert To Uppercase
      </button>

      <button
        type="button"
        className="btn btn-warning  my-3"
        onClick={lowercase}
      >
        Convert To LowerCase
      </button>

      <button type="button" className="btn btn-info  my-3" onClick={clearbox}>
        Clear
      </button>

      <button
        type="button"
        className="btn btn-danger  my-3"
        onClick={handlecopy}
      >
        Copy Text
      </button>
      <button
        type="button"
        className="btn btn-success  my-3"
        onClick={removeextraspace}
      >
        Remove Spaces
      </button>

      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h5>Total Characters:-{text.length}</h5>
        <br />
        <p>Total Words:-{text.split(" ").length}</p>
        <p>Time's to Read:-{0.008 * text.split("").length} Minutes</p>
        <h3>Preview</h3>

        {text.length>0?text:"Write Something in TextBox to Preview"}
      </div>
    </div>
  );
}
