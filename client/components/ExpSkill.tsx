import { useState } from 'react'

interface Props {
  id: number
  skill: any
}

export default function ExpSkill({ id, skill }: Props) {
  const [isSelected, setIsSelected] = useState(false) // Starts with no skill selected

  // Handle clicking on a skill
  const handleClick = () => {
    setIsSelected(!isSelected) // Sets the selected skill and shows its details
  }

  return (
    <>
      <li key={id}>
        <button onClick={handleClick}>
          {/* Display the skill */}
          {isSelected ? skill.name : ''}
        </button>
      </li>
    </>
  )
}
