import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getExperiences } from '../apis/apiExp'
import './ExpBar.css'
import ExpSkill from './ExpSkill'

export default function ExpBar() {
  const [userLevel, setUserLevel] = useState(1) // Starts user at level 1

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

  const skillsInBar = experiences.slice(-maxSkills) // 5 most recent skills

  if (skillsInBar.length === maxSkills) {
    setUserLevel(userLevel + 1) // User levels up when the max amount is reached
    // TODO: Add function to reset the skills count here or keep it stored
  }

  return (
    <>
      <ul className="skill-list">
        {/* Displays the 5 most recent skills */}
        {skillsInBar.map((skill) => {
          return <ExpSkill key={skill.id} skill={skill} />
        })}
      </ul>
      <p>Level: {userLevel}</p>
    </>
  )
}
