import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nab from './components/Nab/Nab'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nab></Nab>
      <h1 className='text-7xl text-red-600'>Hello form</h1>
    </div>
  )
}

export default App
