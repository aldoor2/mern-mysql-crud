import tasksService from '../services/tasks.services.js'

export const getTasks = async (req, res) => {
  const result = await tasksService.getAll()

  if (!result) {
    return res.status(500).json({ status: 'Error', data: { message: 'Oops, something went wrong' } })
  }

  const tasks = result.map(task => ({
    ...task,
    done: Boolean(task.done)
  }))

  return res.json({ status: 'OK', data: tasks })
}

export const getTask = async (req, res) => {
  const result = await tasksService.getOne(req.params.id)

  if (!result)
    return res.status(404).json({ status: 'Error', message: 'Task not found' })

  return res.json({ status: 'OK', data: result })
}

export const createTask = async (req, res) => {
  const { title, description } = req.body

  if (!title)
    return res.status(400).json({
      status: 'Error', data: { message: 'Title is required' }
    })

  const insertId = await tasksService.add({ title, description })

  if (!insertId)
    return res.status(400).json({
      status: 'Error', message: 'Data were not successfully saved'
    })

  return res.status(201).json({
    status: 'Success',
    data: {
      id: insertId,
      title,
      description
    }
  })
}

export const deleteTask = async (req, res) => {
  const result = await tasksService.deleteOne(req.params.id)

  if (result === 0 || result === null)
    return res.status(404).json({
      status: 'Error', data: { message: 'Task not found' }
    })

  return res.sendStatus(204)
}

export const updateTask = async (req, res) => {
  const result = await tasksService.update(req.params.id, req.body)

  if (result.affectedRows === 0 || result === null)
    return res.status(404).json({
      status: 'Error', data: { message: 'Task not found' }
    })

  return res.json({
    status: 'Success', data: { ...req.body, id: req.params.id }
  })
}
