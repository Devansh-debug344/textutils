import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);  
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLowClick= () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext);  
        props.showAlert("Converted to lowercase", "success");

        
    }
    const handlecleartext= () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext='';
        setText(newtext);  
        props.showAlert("Clear the text",'success');
        
    }
    const handlecapitalizetext = () => {
        // Split the text into sentences based on punctuation marks.
        const sentences = text.split(/(?<=[.!?])\s+/); // Remove quotes around the regex
    
        // Capitalize the first letter of each sentence.
        const capitalizedSentences = sentences.map((sentence) =>
            sentence.charAt(0).toUpperCase() + sentence.slice(1)
        );
    
        // Join the capitalized sentences back into a single string.
        const newText = capitalizedSentences.join(' ');
    
        // Update the state with the new text.
        setText(newText);
        props.showAlert("Capatilize first char",'success');
    };
    
    const Inversetext= () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext='';
        for (let i = text.length-1 ; i >= 0; i--) {
          newtext=newtext+text[i]; 
        }
        setText(newtext);  
        props.showAlert("Inverse the Content",'success');
            
    }
    const handleOnChange= (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleFindChange= (event) =>{
        // console.log("On Change");
        findWord(event.target.value);
    }
    const handleReplaceChange= (event) =>{
        console.log(replaceWord(event.target.value));
    }          
    const handleReplaceClick= (event) =>{
       let newtext=text.replaceAll(fWord,rWord);
       setText(newtext);
       props.showAlert("Find and replace the word",'success');

    }   
    const trimwhitespace = () =>{
        // console.log("Uppercase was clicked" + text);
        let newtext=text.split(/[ ]+/)
        setText(newtext.join(" "));  
        props.showAlert("Remove all white spaces",'success');
        
    }
    // const wordcount = () =>{
    //     let countwords=text.trim().split(' ');
    //     if (countwords[0] === ""){
    //         return 0;
    //     }
    //     return countwords.length;       
        
    // }
    const [text, setText] = useState('');
    const [fWord,findWord] = useState('');
    const [rWord,replaceWord] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode=== 'dark'?'white':'#070f68'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color:props.mode=== 'dark'?'white':'#070f68'}} id="myBox" rows="10"></textarea>
            </div>
            <div>
              <button className="btn btn-primary mx-2" style={{color: props.mode=== 'light'?'primary': props.mode==='danger'?'danger' : 'black'}} onClick={handleUpClick}>Convert to uppercase</button>
              <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
              <button className="btn btn-primary mx-2" onClick={handlecleartext}>Clear text</button>
              <button className="btn btn-primary mx-2" onClick={handlecapitalizetext}>capitalize text</button>
              <button className="btn btn-primary mx-2" onClick={Inversetext}>Inverse text</button>
              <button className="btn btn-primary mx-2" onClick={trimwhitespace}>remove extra space</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.trim().split(' ')[0]===''?'0':text.trim().split(' ').length} words & {text.length} characters</p>
            <p>{text.split(".").length-1}Sentences</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
             <h2 className={`text-${props.mode=== 'light'?'dark':'light'}`}>Preview</h2>
             <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>
        <div className='my-5 flex'>
           <h3  className={`text-${props.mode=== 'light'?'dark':'light'}`}>For replacing words</h3>
          <textarea className='mx-2' value={fWord} onChange={handleFindChange}></textarea>
          <textarea className='mx-2' value={rWord} onChange={handleReplaceChange}></textarea>
          <button className="btn btn-primary mx-2 my-2" onClick={handleReplaceClick}>replace</button>
        </div>
        
        </>
    )
}
