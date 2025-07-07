import React, { useState, Suspense } from 'react'
import './App.css'
const MyComponent = React.lazy(() => import('./components/MyComponent'))


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <MyComponent state={count}/>
        </Suspense>
        <h1>Hele</h1>
        <button onClick={() => setCount((click) => click + 1)}>Increment</button>
      </div>
    </>
  )
}

export default App
