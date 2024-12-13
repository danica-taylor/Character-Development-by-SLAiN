import Router from 'express'

import * as db from '../db/db'

const router = Router()

// GET 'api/v1/experience'
router.get('/', async (req,res)=>{
  try {
    const experiences = await db.getAllExperienceEntries()
    res.json(experiences)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// POST 'api/v1/experience'
router.post('/', async (req,res)=>{
  const newExp = req.body
  try{
    await db.addExpEntry(newExp)
    res.sendStatus(200)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// DEL 'api/v1/experience/:id'

// PATCH 'api/v1/experience/:id'

export default router