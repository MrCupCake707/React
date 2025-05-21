import React, { createElement as e } from 'react'
import './App.css'

function App() {
   

  return e(type: 'div', props{className: 'container', children:[
    e(type: 'h1', props:{className: 'front-bold'}, children: 'Test JSX'),
    e(type: 'button', props:{className: ''}, children: 'Click me!')
  ])
}
export default App
