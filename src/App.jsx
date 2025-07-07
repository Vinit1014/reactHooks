import React, { useState, Suspense } from 'react'
import './App.css'
const MyComponent = React.lazy(() => import('./components/MyComponent'))
import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const { toggleTheme, background, color } = useContext(ThemeContext);

  return (
    <>
      <div style={{ backgroundColor: background, color: color, width: "100%"}}>
          <Suspense fallback={<p>Loading...</p>}>
            <MyComponent state={count}/>
          </Suspense>
          <h1>Hele</h1>
          <button onClick={() => setCount((click) => click + 1)}>Increment</button>
          <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  )
}

export default App
