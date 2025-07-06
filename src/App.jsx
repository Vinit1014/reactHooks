import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MyComponent state={count}/>
        <button onClick={() => setCount((click) => click + 1)}>Increment</button>
      </div>
    </>
  )
}

export default App
