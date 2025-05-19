export default function Header(){
    const now = new Date()
    return (
       <div>
        <header>
          <h2>Hello world!</h2>
          <span> Время: {now.toLocaleTimeString()}</span>
        </header>
        </div>
        )
}