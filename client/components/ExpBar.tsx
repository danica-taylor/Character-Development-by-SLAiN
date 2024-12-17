import { useQuery } from '@tanstack/react-query'
import { getExperiences } from '../apis/apiExp'
import './ExpBar.css'
import ExpSkill from './ExpSkill'

export default function ExpBar() {
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

  if (!experiences || experiences.length === 0) {
    return <p>No skills available</p>
  }

  const maxSkills = 5
  const totalSkills = experiences.length
  const userLevel = Math.floor(totalSkills / maxSkills) + 1 // User level changes everytime a multiple of 5 is reached

  return (
    <>
      <ul className="skill-list">
        {/* Displays the 5 most recent skills */}
        {experiences.slice(-maxSkills).map((skill) => {
          return <ExpSkill key={skill.id} skill={skill} />
        })}
      </ul>
      <p>Level: {userLevel}</p>
    </>
  )
}
