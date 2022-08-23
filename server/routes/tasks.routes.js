import { Router } from 'express'
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask
} from '../controllers/tasks.controllers.js'


const tasksRouter = Router()

tasksRouter.get('/', getTasks)

tasksRouter.get('/:id', getTask)

tasksRouter.post('/', createTask)

tasksRouter.delete('/:id', deleteTask)

tasksRouter.patch('/:id', updateTask)

export default tasksRouter