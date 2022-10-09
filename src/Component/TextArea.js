import React, { useState } from 'react'

export default function TextArea(props) {
    
     const [text, setText] = useState('');

    const handleUpClick = () =>{
    //   console.log('uppercase clicked'+text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    } 
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }

    const handleClear = () =>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
    }

    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    //props.showAlert("Speak","success");
    }

    const handleRemoveSymbol = () => {
      props.showAlert("Text Removed","success");
       const regex = /[0-9/A-Z/a-z/ /]/g;
       const letters = text.match(regex);
       const res1 = letters.join('');
       setText(res1);
       
    }

    const handleExtractDigit = () =>{
       props.showAlert("Digit Extracted","success");
         const regex = /[0-9/ /]/g;

        const digits = text.match(regex);
        const res = digits.join('');
       setText(res)
    }
    const handleCopyClick = (event)=>{
        const area = document.querySelector('#myBox')
        area.select();
        // document.execCommand('copy')
        // alert("Copied the text in clipboard : " + area.value);
        navigator.clipboard.writeText(area.value);
        document.getSelection().removeAllRanges();
        alert("Copied the text in clipboard :  " + area.value);
        //props.showAlert("Copied the text in clipboard :  " + area.value);
    }
    const handleRemoveWhiteSpace = () =>{
      let newText = text.replace(/\s+/g, ' ').trim();
      setText(newText);
      props.showAlert("Removed all white Spaces","success");
    }

    const handleOnChange = (event) =>{
        // console.log('on change');
        setText(event.target.value);
    }
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
          <h1><i>{props.heading}</i></h1>
        <div className="mb-3">
          <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#26114b':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>ClearText</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak} >Speak</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSymbol} >RemoveSymbol</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtractDigit} >DigitExtract</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} >CopyText</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveWhiteSpace} >RemoveExtraSpaces</button>


    </div>
        
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(' ').filter((element) => {return element.length!== 0}).length} <b>words,</b> {text.length} <b>characters</b></p>
    {/* <p>{text.length===0?'0':text.trim().split(' ').length} <b>words,</b> {text.length} <b>characters</b></p> */}
    <p>{text.length===0?'0':0.008*text.split(' ').length} <b>Minute</b></p>
    <h2><i>Preview:</i> </h2>
    <p>{text.length>0?text:'Enter something in the textbox above to preview here'}</p>
    </div>
    </> 
  )
}
