export default function Counter(){
 const  [count, setCount] = useState(0)
    const plus = () => {
        setCount (count +1)
    }
    const minus = () => {
        setCount (count -1)
    }
    const reset = () => {
        setCount(0)
    }

    return(
        <div>
        <h1> Счетчик:</h1>
        <button onClick={plus}style={{ margin: '5px', padding: '10px 20px' }}> + </button>
        <button onClick={minus}style={{ margin: '5px', padding: '10px 20px' }}> - </button>
        <button onClick={reset}style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#ff4444', color: 'white' }}> Сбросить </button>
        </div>

    )
}