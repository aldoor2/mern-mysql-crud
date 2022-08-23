import express from 'express'
import { PORT } from './config.js'
import indexRouter from './routes/index.routes.js'
import tasksRouter from './routes/tasks.routes.js'

// Inilization
const app = express()

// Routes
app.use(indexRouter)
app.use('/api/tasks', tasksRouter)

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)