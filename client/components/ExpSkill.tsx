import { ExperienceData } from '../../models/exp'

interface Props {
  skill: ExperienceData
}

export default function ExpSkill({ skill }: Props) {
  // Handle clicking on a skill
  const handleClick = () => {
    const skillDesc = skill.date ? skill.date : 'None provided'
    alert(`Experience: ${skill.name}\nDate: ${skillDesc}`) // Displays the skill and its info when clicked
  }

  return (
    <>
      <li>
        <button onClick={handleClick}>{''}</button>
      </li>
    </>
  )
}
