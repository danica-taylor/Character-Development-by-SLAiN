import '../styles/styles.css'
import Input from './Input'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <img
          src={'public/images/Character-Development-16-12-2024.png'}
          alt="Character Development Logo"
          className="app-logo"
        />
        <Link to="experience">EXP</Link>
      </nav>

      <div>
        <Input />
      </div>

      <footer>
        <p>&copy; 2024 SLAiN. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
