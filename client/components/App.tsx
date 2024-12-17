import Input from './Input'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import './App.css'
import ExpBar from './ExpBar'

function App() {
  return (
    <>
      <div className="app">
        <h1>Character Development</h1>
        <Link to="experience">EXP</Link>
        <Input />
        <ExpBar />
      </div>
    </>
  )
}

export default App
