import { useState } from 'react'
export default function Counter(){
 
    const  [count, setCount] = useState(0)
        function plus () {
            setCount (count +1)
        }
        function minus() {
            setCount (count -1)
        }
        function reset() {
            setCount(0)
        }

  
    return(
        <div>
        <h1> Счетчик: {count} </h1>
        <button onClick={plus}> + </button>
        <button onClick={minus}> - </button>
        <button onClick={reset}> Сбросить </button>
        </div>
        )
  
}