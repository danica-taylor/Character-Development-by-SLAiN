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
      <nav>
        <img
          src={'public/images/Character-Development-16-12-2024.png'}
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
      </nav>

      <footer>
        <p>&copy; 2024 SLAiN. All Rights Reserved.</p>
      </footer>

    </>
  )
}

export default App
