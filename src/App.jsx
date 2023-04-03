import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nab from './components/Nab/Nab'
import Pricelist from './components/PriceList/Pricelist'
import StudentsMarks from './components/Rechats/StudentMarks/StudentsMarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nab></Nab>
      <Pricelist></Pricelist>
      <StudentsMarks></StudentsMarks>
    </div>
  )
}

export default App
