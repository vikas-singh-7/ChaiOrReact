import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increase=()=>{
    setCount((prevcounter)=>prevcounter+1)
    setCount((prevcounter)=>prevcounter+1)
    setCount((prevcounter)=>prevcounter+1)
    setCount((prevcounter)=>prevcounter+1)
    
  }

  // const increase=()=>{
  //   setCount(count +1)
  //   setCount(count +2)
  //   setCount(count +5)
  //   setCount(count +20)
    
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>{count}</h3>
        <button onClick={increase}>
          click increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          click reduce
        </button>
     
      </div>
     
    </>
  )
}

export default App
