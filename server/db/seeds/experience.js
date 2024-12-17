/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('experience').del()
  await knex('experience').insert([
    {
      id: 1,
      name: 'Join Dev Academy Aotearoa',
      date: '22/06/2024',
    },
    { id: 2, 
      name: 'Applied for an internship', 
      date: '04/12/2024' 
    },
    { id: 3, 
      name: 'Got into a relationship', 
      date: '07/01/2023' 
    },
  ])
}
