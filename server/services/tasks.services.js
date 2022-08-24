import { pool } from '../db.js'

const get = async () => {
  try {
    const res = await pool.query('SELECT * FROM tasks')
    return res.rows[0]
  } catch (e) {
    console.log(e.message)
    return null
  }
}

const getById = async (id) => {
  try {
    const res = await pool.query('SELECT * FROM tasks WHERE id=$1', [id])
    return res.rows[0]
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
  get,
  getById,
  add
}