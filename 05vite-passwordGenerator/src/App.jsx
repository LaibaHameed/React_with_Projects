import { useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [sepAllow, setSepAllow] = useState(false);
  const [password, setPassword] = useState(false);

  return (
    <>
      <div className="card">
        <h1>Password Generator</h1>
        <div id="box1">
          <input type="text" id="output" placeholder="Password" />
          <button className="icon">
            <i className="far fa-copy" onclick="copyClipboard()"></i>
          </button>
          <input
            type="range"
            id="length"
            min="8"
            max="20"
            value="8"
            onchange="generatePass()"
          />
          <h3 id="length-val">8</h3>
        </div>
        <div id="box2">
          <label class="container">
            <input type="checkbox" />
            Numbers
          </label>
          <label class="container">
            <input type="checkbox" />
            Special Chars
          </label>
          {/* <button className="btn" onclick="generatePass()">
            <span className="box">Numbers & Characters</span>
          </button> */}

          {/* <button className="btn" onclick="generatePass()">
            <span className="box">Special Characters</span>
          </button> */}
          <button className="btn" onclick="generatePass()">
            <span className="box">Generate Password</span>
          </button>
          <button className="btn" onclick="generatePass()">
            <span className="box">Regenerate Password</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
