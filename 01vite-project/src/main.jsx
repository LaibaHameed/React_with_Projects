import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyQ() {
  return (
    <>
      <h3>how's the journey is going?</h3>
    </>
  );
}

// const anotherElem = (
//   <a href='https://www.google.com/' target='blank'>google</a>
// )

// create element with the help of react(syntax) , React.createElement ye transpiler babler inject krta hai
const ReactElem = React.createElement(
  "a", // tag name in string 
  { href: "https://www.google.com/", target: "blank" }, // props of tag, if not then empty
  "google" // text of tag in string
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MyQ />
  </React.StrictMode>
  // anotherElem
  // ReactElem
);
