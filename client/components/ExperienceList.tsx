import { useQuery } from '@tanstack/react-query'
import { getExperiences } from '../apis/apiExp'
import { Link } from 'react-router-dom'
import './ExperienceList.css'

export default function ExperienceList() {
  const {
    data: experiences = [],
    isLoading,
    isError,
  } = useQuery({ queryKey: ['experiences'], queryFn: getExperiences })

  if (isError) {
    return <h2>Error loading experiences.</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <section>
      <div>
        <ul className="experience-list">
          {experiences.map((experience) => (
            <li key={experience.id}>
              <div className="view">
                <label>{experience.name}</label>
              </div>
            </li>
          ))}
        </ul>
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}
