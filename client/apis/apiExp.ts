import request from 'superagent'
import { Experience } from '../../models/exp'
// will update promise arrays when model made

// access server-side api
const rootUrl = '/api/v1/ExpEntry'

// get all exp
export async function getExperiences(): Promise<Experience[]> {
  try {
    const res = await request.get(rootUrl)
    return res.body as Experience[]
  } catch (error) {
    console.error(`Error fetching experiences: ${error.message}`)
    throw error
  }
}

// get exp by ID
export async function getExperienceById(id: number): Promise<Experience> {
  try {
    const res = await request.get(`${rootUrl}/${id}`)
    return res.body as Experience
  } catch (error) {
    console.error(`Error fetching experience with ID ${id}: ${error.message}`)
    throw error
  }
}

// add new exp
export async function addExperience(newExp: Experience): Promise<void> {
  try {
    await request.post(rootUrl).send(newExp)
  } catch (error) {
    console.error(`Error adding new experience: ${error.message}`)
    throw error
  }
}

// delete exp by ID
// discussed in brainstorm session not to have del function, TBC
// export async function deleteExperience(id: number): Promise<void> {
//   try {
//     await request.delete(`${rootUrl}/${id}`)
//   } catch (error) {
//     console.error(`Error deleting experience with ID ${id}: ${error.message}`)
//     throw error
//   }
// }
