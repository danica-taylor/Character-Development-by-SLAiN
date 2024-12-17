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
    addMutation.mutate({ name: newEXP, details: newDate })
    setNewEXP('')
    setNewDate('')

    if (event) {
      canvasConfetti()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="exp">Put experience below</label>
        <input
          placeholder="What did I achieve today?"
          type="text"
          id="exp"
          onChange={handleChange}
          value={newEXP}
        />
        <label htmlFor="date">Put date below</label>
        <input
          placeholder="What date did this experience occur?"
          type="text"
          id="date"
          onChange={handleDateChange}
          value={newDate}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddEXP
