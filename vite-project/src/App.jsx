import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
       <div>
        <Header />
       <main>
        <h1> Пробуем vita+react</h1>
       </main>
       </div>
  )
}

export default App
