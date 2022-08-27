import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import { PORT } from './config.js'

import indexRouter from './routes/index.routes.js'
import tasksRouter from './routes/tasks.routes.js'

// Inilization
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use(indexRouter)
app.use('/api/tasks', tasksRouter)

// Static Files
app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)