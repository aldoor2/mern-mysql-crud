import axios from 'axios'

export const getTasksRequest = async () =>
  await axios.get('http://localhost:4000/api/tasks')

export const createTaskRequest = async (task) =>
  await axios.post(
    'http://localhost:4000/api/tasks',
    task,
    { headers: { 'Content-Type': 'application/json' } },
  )

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/tasks/${id}`)

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/tasks/${id}`)

export const updateTaskRequest = async (id, updatedFields) =>
  await axios.patch(
    `http://localhost:4000/api/tasks/${id}`,
    updatedFields,
    { headers: { 'Content-Type': 'application/json' } },
  )