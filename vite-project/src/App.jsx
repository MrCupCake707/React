import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
 
  return (
       <div>
        <Header />
       <main>
        <h1> Пробуем vita+react</h1>
       </main>
       <Counter />
       </div>
        )
}

export default App