import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getExperiences } from '../apis/apiExp'
import './ExperienceList.css'
import ExpSkill from './ExpSkill'

export default function ExpBar() {
  const [userLevel, setUserLevel] = useState(1) // Starts user at level 1

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

  if (!experiences || experiences.length === 0) {
    return <p>No skills available</p>
  }

  const maxSkills = 5
  const skillsInBar = Math.min(experiences.length, maxSkills) // Shows how many skills are in the bar and makes sure it doesn't exceed 5

  if (skillsInBar === maxSkills) {
    setUserLevel(userLevel + 1) // User levels up when the max amount is reached
    // TODO: Add function to reset the skills count here or keep it stored
  }

  return (
    <>
      <ul>
        {/* Displays the 5 most recent skills */}
        {experiences.slice(-maxSkills).map((skill) => {
          return <ExpSkill key={skill.id} id={skill.id} skill={skill} />
        })}
      </ul>
    </>
  )
}
