import Input from './Input'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import './App.css'

function App() {
  return (
    <>
      <div className="app">
        <h1>Character Development</h1>
        <Link to="experience">EXP</Link>
        <Input />
      </div>
    </>
  )
}

export default App
