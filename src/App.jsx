import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navber from "./Components/Navber/Navber";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navber></Navber>
    </div>
  )
}

export default App
