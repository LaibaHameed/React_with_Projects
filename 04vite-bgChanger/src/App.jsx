import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#bc6c25");
  // const colors = [{ name:"Red", colCode : "#xyz"}, 
  // { name:"Blue", colCode : "#3e5c76"},
  // { name:"Green", colCode : "#283618"},
  // { name:"Red", colCode : "#c1121f"}]
  return (
    <>
    <div className='h-full' style={{backgroundColor: color}}> 
    <div className='box'>
    <div className='inerBox'>
    {/* return ({ colors.map((col, id) => {
    <button key={id}
     onClick={ () => setColor(col.colCode)} > {col.name}</button> 
     })}) */}
      <button onClick={() =>setColor('#c1121f')} className=''>Red</button>
      <button onClick={() =>setColor('#ffd166')}>yellow</button>
      <button onClick={() =>setColor('#3e5c76')}>blue</button>
      <button onClick={() =>setColor('black')}>black</button>
      <button onClick={() =>setColor('#283618')}>green</button>
      <button onClick={() =>setColor('#540b0e')}>brown</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
