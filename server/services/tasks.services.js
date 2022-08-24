import { pool } from '../db.js'

const getAll = async () => {
  try {
    const [result] = await pool.query('SELECT * FROM tasks ORDER BY createdAt DESC')
    return result
  } catch (e) {
    console.log(e.message)
    return null
  }
}

const getOne = async (id) => {
  try {
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id])
    return result[0]
  } catch (e) {
    console.log(e.message)
    return null
  }
}

const add = async (newTask) => {
  const { title, description } = newTask
  try {
    const [result] = await pool.query(
      'INSERT INTO tasks (title, description) VALUES (?, ?)',
      [title, description]
    )
    return result.insertId
  } catch (e) {
    console.log(e.message)
    return null
  }
}

export default {
  getAll,
  getOne,
  add
}