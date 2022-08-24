import tasksService from '../services/tasks.services.js'

export const getTasks = async (req, res) => {
  try {
    const result = await tasksService.get()
    console.log(result)

    if (!result) {
      return res.status(500).json({ status: 'Error', data: { message: 'Internal error' } })
    }

    return res.json(result)
  } catch (error) {
    return res.status(500).json({ status: 'Error', data: { message: error.message } })
  }
}

export const getTask = (req, res) => {
  res.send('getting task')
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
    status: 'OK',
    data: {
      id: insertId,
      title,
      description
    }
  })
}

export const updateTask = (req, res) => {
  res.send('updating task')
}

export const deleteTask = (req, res) => {
  res.send('deleting task')
}