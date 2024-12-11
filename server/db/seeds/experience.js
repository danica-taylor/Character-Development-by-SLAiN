/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      name: 'Join Dev Academy Aotearoa',
      details: 'Full stack applications',
    },
    { id: 2, name: 'Applied for an internship', details: 'With OSF Digital' },
    { id: 3, name: 'Got into a relationship', details: '07/01/2023' },
  ])
}
