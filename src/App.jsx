import { useState } from 'react'
import './App.css';
import Navber from "./Components/Navber/Navber";
import PriceList from './Components/PriceList/PriceList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navber></Navber>
     <PriceList></PriceList>
    </div>
  )
}

export default App
