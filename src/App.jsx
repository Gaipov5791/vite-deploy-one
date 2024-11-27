import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold text-red-600'>
          Hello form deploy!
        </h1>
        <p className='text-lg font-serif text-gray-600'>
          It is not so dificalt to deploy the app
        </p>
      </div>
      
    </>
  )
}

export default App
