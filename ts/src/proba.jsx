/*
import React, {createElement as e, useState} from 'react';

function App() {
  const [count, setCount] = useState(0)

 return e('div',{ClassName: 'container'}, [
  e('h1', {className: 'fond-bold', key: 1}, `Set: ${count}`),
  e('button', {className: 'py-2 px-4 border', 
    key: 2, 
    onClick:()=> setCount(count + 1)}, 
    'Click')
 ])
}
export default App