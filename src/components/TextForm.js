import React,{useState} from "react";

function TextForm(props) {

  const [Text,setText]=useState('');
  const[charcount,Setcharcount]=useState(Text.length);
  const[wordcount,Setwordcount]=useState(Text.split(' ').length-1)

  function Uppercasefunc() {
    const newText = Text.toUpperCase(); // converting the text written to uppercase 
    setText(newText);
  }
  function handlechange(event) {
    setText(event.target.value);  // allows to change the fixed value 
    Setcharcount(Text.length+1)
    Setwordcount(Text.split(' ').length)  

  }
  function Lowercasefunc() {
    const newText=Text.toLowerCase();
    setText(newText);
  }
  function Clearfunc() {
    setText('');
    Setwordcount(0);
    Setcharcount(0);
  }
  
  return (
    <>
    <div className="container ">
      <form>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={Text}
            onChange={handlechange}
          ></textarea>
          
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={Uppercasefunc}>Convert to Uppercase</button>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={Lowercasefunc}>Convert to Lowercase</button>
          <button type="button" className="btn btn-primary mx-2 my-2" onClick={Clearfunc}>Clear</button> 
        </div>
      </form>
    </div>
    <div className="container my-3  ">
      <h2>Text Analysis</h2>
      <p>No of words: {wordcount}</p>
      <p>No of characters: {charcount} </p>
      <p>Time to read: {wordcount*0.008} minutes </p>
      <p>Text: {Text}</p>
    </div>
    </>
    
  );
}
export default TextForm;
