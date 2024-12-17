import '../styles/styles.css'
import Input from './Input'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import './App.css'
import ExpBar from './ExpBar'
// import HpBar from './HpBar'

function App() {
  return (
    <>
      <div className="app">
        <img
          src={'client/styles/images/Character-Development-16-12-2024.png'}
          alt="Character Development Logo"
          className="app-logo"
        />{' '}
        <div className="exp-bar">
          <Link to="experience">EXP</Link>
          <ExpBar />
        </div>
        {/* <HpBar /> */}
        <Input />
      </div>
    </>
  )
}

export default App
