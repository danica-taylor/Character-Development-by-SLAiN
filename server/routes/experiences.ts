import Router from 'express'

import * as db from '../db/db'

const router = Router()

// GET 'api/v1/experience'
router.get('/', async (req, res) => {
  try {
    const experiences = await db.getAllExperienceEntries()
    res.json(experiences)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// GET 'api/v1/experience/:id'
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    const experience = await db.getExperienceEntryById(id)
    res.json(experience)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// POST 'api/v1/experience'
router.post('/', async (req, res) => {
  const newExp = req.body
  try {
    await db.addExperienceEntry(newExp)
    res.sendStatus(200)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// DEL 'api/v1/experience/:id'
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteExperienceEntry(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// PATCH 'api/v1/experience/:id'

export default router
