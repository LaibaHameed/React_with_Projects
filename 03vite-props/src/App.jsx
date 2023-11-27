import "./App.css";
import Card from "./components/card";

function App() {
  let myobj = {
    name: "Laiba",
    age: 20
  }

  let myarr = [23,45,32]
  return (
    <>
    <Card channel="code&coffe" anyobj={myobj} anyarr={myarr} btnText="Visit Me"/>
    <Card channel="code&chai" anyobj={myobj} anyarr={myarr} btnText="Click Me"/>
    </>
  )
}

export default App;
