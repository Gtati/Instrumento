import './App.css'
import { Route, Routes } from 'react-router'
import { Finances } from './components/Finances/Finances'
import {Welcome} from './components/Welcome/Welcome'

function App() {
  
  return (
    <>
    <Welcome></Welcome>
    <Routes>
      <Route path='/Finances' element={<Finances/>}/>
      </Routes>
    </>
  )
}

export default App
