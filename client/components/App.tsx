import '../styles/styles.css'
import Input from './Input'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <img
          src={'client/styles/images/Character-Development-16-12-2024.png'}
          alt="Character Development Logo"
          className="app-logo"
        />{' '}
        <Input />
      </div>
      <Link to="experience">EXP</Link>
    </>
  )
}

export default App
