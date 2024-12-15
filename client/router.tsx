/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import ExperienceList from './components/ExperienceList'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} />,
    <Route path="/experience" element={<ExperienceList />} />,
  ]),
)

export default router
