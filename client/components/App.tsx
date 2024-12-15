import AddEXP from './Input'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <h1>Character Development</h1>
        <Link to="experience">EXP</Link>
        <AddEXP />
      </div>
    </>
  )
}

export default App
