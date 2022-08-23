import express from 'express'
import { PORT } from './config.js'
import indexRouter from './routes/index.routes.js'

// Inilization
const app = express()

// Routes
app.use(indexRouter)

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)