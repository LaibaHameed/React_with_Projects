import Comp from "./Comp"

function App() {
  const userName = ' | Laiba Hameed'

  return (
    <>
      <h1>
        Hello World
        {userName} 
        {/* ye js toh hai... pr ye eveluated expression hai(final outcome of js) */}
      </h1>
      <Comp/>
    </>
  )
}

export default App
