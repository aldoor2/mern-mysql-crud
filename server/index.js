import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { PORT } from './config.js'

import indexRouter from './routes/index.routes.js'
import tasksRouter from './routes/tasks.routes.js'

// Inilization
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use(indexRouter)
app.use('/api/tasks', tasksRouter)

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)