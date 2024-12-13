import express from 'express'
import * as Path from 'node:path'

// import fruitRoutes from './routes/fruits.ts'

// ----------------------------------------------
// NOTE TEMPORARY NAMES
// The expRoutes are exp.ts are just temporary placeholders until the 
// db/server/migrations table are set up along with the seeds
import experience from './routes/server-side routes.ts'
// ----------------------------------------------

const server = express()
server.use(express.json())

// OUR API ROUTES HERE
// ----------------------------------------------
// NOTE TEMPORARY NAMES
// The expRoutes are exp are just temporary placeholders until we agree on a name 
server.use('/api/v1/experience', experience)
// ----------------------------------------------


// server.use('/api/v1/fruits', fruitRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
