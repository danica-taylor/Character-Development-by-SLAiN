import { useState } from 'react'
import { ExperienceData } from '../../models/exp'

interface Props {
  skill: ExperienceData
}

export default function ExpSkill({ skill }: Props) {
  const [isSelected, setIsSelected] = useState(false) // Starts with no skill selected

  // Handle clicking on a skill
  const handleClick = () => {
    setIsSelected(!isSelected) // Sets the selected skill and shows its details
  }

  return (
    <>
      <li>
        <button onClick={handleClick}>
          {/* Display the skill */}
          {isSelected ? skill.name : ''}
        </button>
      </li>
    </>
  )
}
