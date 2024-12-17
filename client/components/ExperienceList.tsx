import { useQuery } from '@tanstack/react-query'
import { getExperiences } from '../apis/apiExp'
import { Link } from 'react-router-dom'

export default function ExperienceList() {
  const {
    data: experiences = [],
    isLoading,
    isError,
  } = useQuery({ queryKey: ['exp'], queryFn: getExperiences })

  if (isError) {
    return <h2>Error loading experiences.</h2>
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <section className="experience-section">
      <h2>My Experiences</h2>
      <ul className="experience-list">
        {experiences.map((experience) => (
          <li key={experience.id} className="experience-item">
            <article className="experience-card">
              <div className="experience-header">
                <label>{experience.name}</label>
              </div>
              <p className="experience-details">{experience.details || ''}</p>
            </article>
          </li>
        ))}
      </ul>
      <Link to="/" className="back-home-link">
        Back to Home
      </Link>
    </section>
  )
}
