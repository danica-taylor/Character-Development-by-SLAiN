import request from 'superagent'
import { Experience, ExperienceData } from '../../models/exp'
// will update promise arrays when model made

// access server-side api
const rootUrl = '/api/v1/Experience'

// get all exp
export async function getExperiences(): Promise<Experience[]> {
  try {
    const res = await request.get(rootUrl)
    return res.body as Experience[]
  } catch (error) {
    console.error(`Error fetching experiences`)
    throw error
  }
}

// get exp by ID
export async function getExperienceById(id: number): Promise<Experience> {
  try {
    const res = await request.get(`${rootUrl}/${id}`)
    return res.body as Experience
  } catch (error) {
    console.error(`Error fetching experience with ID ${id}`)
    throw error
  }
}

// add new exp
export async function addExperience(newExp: ExperienceData): Promise<void> {
  try {
    await request.post(rootUrl).send(newExp)
  } catch (error) {
    console.error(`Error adding new experience`)
    throw error
  }
}
