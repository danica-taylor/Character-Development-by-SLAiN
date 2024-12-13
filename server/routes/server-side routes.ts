import Router from 'express'

// Assuming we will have created a db.ts file in './db/db.ts' file
// where we have imported the connection from the connection.ts/db/server-side file
//  and given it the name db like this 'const db = connection'
import * as db from '../db/db'
// ---------------------------------------------------------

// Created server-side API routes below 
// using the GET, POST methods 
// that will be created in the './db/db.ts' file

// ----------------------------------------------------
const router = Router()

// Have used temporary names for the routes below
// E.g 'const experience', db.getExpEntry, 'const newExp', db.addExp.
// These will be changed later

// GET 'api/v1/ExpEntry'
router.get('/', async (req,res)=>{
  try {
    const experiences = await db.getExpEntries()
    res.json(experiences)
  } catch (error) {
    console.log(`Database error ${error}`)
    res.sendStatus(500)
  }
})

// POST 'api/v1/ExpEntry'
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

// DEL 'api/v1/ExpEntry/:id'

// PATCH 'api/v1/ExpEntry/:id'

export default router