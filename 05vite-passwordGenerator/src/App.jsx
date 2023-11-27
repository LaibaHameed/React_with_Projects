import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllow, setNumAllow] = useState(true);
  const [sepAllow, setSepAllow] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePass = useCallback(()=>{
    let pass = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let specials = "!\"$%&/()=?@~`\\.';:+=^*_-";

    if(numAllow) chars += nums;
    if(sepAllow) chars += specials;

    for(let i =0; i<length; i++){
      let char = Math.floor(Math.random() * chars.length) ;
      pass += chars.charAt(char);
    }
    setPassword(pass);

  } , [length, numAllow, sepAllow, setPassword])
  
  const copyClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    generatePass();
  }, [length, numAllow, sepAllow, generatePass]);

  return (
    <>
      <div className="card">
        <h1>Password Generator</h1>
        <div id="box1">
          <input type="text" id="output" placeholder="Password" value={password} readOnly ref={passwordRef}/>
          <button className="icon" onClick={copyClipboard}>
            <i className="far fa-copy"></i>
          </button>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange = {(e)=>{setlength(e.target.value)}}
          />
          <h3 id="length-val">{length}</h3>
        </div>
        <div id="box2">
          <label class="container">
            <input type="checkbox" defaultChecked={numAllow} onChange = {()=>{setNumAllow((prev)=>!prev);}}/>
            Numbers
          </label>
          <label class="container">
            <input type="checkbox" defaultChecked={sepAllow} onChange = {()=>{setSepAllow((prev)=>!prev);}}/>
            Special Chars
          </label>
          <button className="btn" onClick={generatePass}>
            <span className="box">Generate Password</span>
          </button>
          <button className="btn" onClick={generatePass}>
            <span className="box">Regenerate Password</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
