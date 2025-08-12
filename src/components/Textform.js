// rfc boiler plate function based component
import React, {useState} from 'react'

export default function Textform(props) {


  const handleOnChange = (event)=>{
    console.log("On Change");
    settext(event.target.value);
  }

  const handleUpClick = ()=> {
    console.log("Convert to Uppercase");
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLowClick = ()=> {
    console.log("Convert to Lowercase");
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClear = ()=> {
  console.log("Clear");
  let newtext = '';
  settext(newtext);
  props.showAlert("Text Cleared","success");
  }

  const handleTrim = ()=> {
  console.log("Trim");
  let newtext = text.replace(/\s{2,}/g, ' ').trim();
  settext(newtext);
  props.showAlert("Trimmed Your Text","success");
  }

  const handleCopy = ()=> {
  console.log("Copy");
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied!!","success");
  }

  const [text, settext] = useState('Enter Text Here');

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>

    <h1>{props.heading}</h1>

    <div className="mb-3 ">
      <textarea id="mybox" className="form-control" style={{backgroundColor: props.mode==='dark'?'#2f2f2f':'white', color: props.mode ==='dark'?'white':'black'}} rows="10" value={text} onChange={handleOnChange}> </textarea>
    </div>

    <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>UpperCase</button>
    
    <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>LowerCase</button>

    <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-3 my-1" onClick={handleClear}>Clear</button>
    
    <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-3 my-1" onClick={handleTrim}>Remove Extra Spaces</button>

    <button disabled={text.length === 0} type="submit" className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy</button>

    </div>
    <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`}>
      <h1>Text Summary </h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
