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
        <div className="exp-bar">
          <Link to="experience">EXP</Link>
          <ExpBar />
        </div>
        <Input />
      </div>
    </>
  )
}

export default App
