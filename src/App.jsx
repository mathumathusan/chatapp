import { useState } from 'react'

import './App.css'
import Chat from './components/Chat'
import Message from './components/Message'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Chat/>
    </>
  )
}

export default App
