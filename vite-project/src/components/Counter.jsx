/*import React, { useState } from 'react'

export default function Counter(){

  const [count, setCount] = useState(5)

  const plus = () => setCount(prev => prev + 1)
  const minus = () => setCount(prev => prev - 1)
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>Сбросить</button>
    </div>
  );
}*/
import { useState } from 'react'
export default function Counter(){

    const  [count, setCount] = useState(0)
        function plus () {
            setCount ((prevCount)=> prevCount +1)
        }
        function minus() {
            setCount ( (prevCount)=> prevCount -1)
        }
        function reset() {
            setCount(0)
        }
      return(
        <div>
        <h1>Счетчик: {count}</h1>
        <button onClick={plus}> + </button>
        <button onClick={minus}> - </button>
        <button onClick={reset}> Сбросить </button>
        </div>
        )
 } 

