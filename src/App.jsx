import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Contador from './components/Contador'
function App() {
  const [cont,setCont] = useState(0);

  return (
    <>
      <Contador cont={cont} setCont={setCont}></Contador>
      <Card cont={cont}></Card>

    </>
  )
}

export default App
