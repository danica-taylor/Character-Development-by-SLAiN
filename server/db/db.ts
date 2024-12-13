import connection from "./connection";


import { Experience } from '../../models/exp.ts'


const db = connection;


// Get all experience entries
export function getAllExperienceEntries(): Promise<Experience[]> {
  return db('experience').select()
}

// Get experience entry by ID
export function getExperienceEntryById(id: number): Promise<Experience> {
  return db('experience').where({ id }).select().first()
}

// Add experience entry (POST)
export function addExperienceEntry(newExpEntry: Experience){
  return db('experience').insert(newExpEntry)
}

// Delete experience entry (DEL)
export function deleteExperienceEntry(id: number): Promise<Experience> {
  return db('experience').where({ id }).del()
}

// ----------------------------------------------
// Below are potential stretch CRUD functions that can be added in at a later time 
// THe functions below have temporary placeholder names
// ----------------------------------------------



// // Get role by id (GET)
// export function getExpEntryById(id: number): Promise<ExpEntry> {
//   return db('experience').where({id}).select().first()
// }

// // Update role (PATCH)
// export function updateExpEntry(id: number, updatedExpEntry: ExpEntry): Promise<ExpEntry> {
//   return db('experience').where({id}).update(updatedExpEntry)
// }

