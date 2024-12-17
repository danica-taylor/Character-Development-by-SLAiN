import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addExperience } from '../apis/apiExp'
import { ExperienceData } from '../../models/exp'
import canvasConfetti from 'https://cdn.skypack.dev/canvas-confetti'

function AddEXP() {
  const [newEXP, setNewEXP] = useState('')
  const [newDate, setNewDate] = useState('')
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (exp: ExperienceData) => addExperience(exp),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['exp'] }),
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEXP(event.target.value)
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    addMutation.mutate({ name: newEXP, date: newDate })
    setNewEXP('')
    setNewDate('')

    if (event) {
      canvasConfetti()
    }
  }

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Share Your Development!</h1>
        <p>Celebrate your progress and achievements.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What did I achieve today?"
          type="text"
          id="exp"
          onChange={handleChange}
          value={newEXP}
          required
        />
        <input
          placeholder="dd/mm/yyyy"
          type="text"
          id="date"
          onChange={handleDateChange}
          value={newDate}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default AddEXP
