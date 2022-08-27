import { createPool } from 'mysql2/promise'
import { DB } from './config.js'

export const pool = createPool({
  host: DB.HOST,
  port: DB.PORT,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.DATABASE_NAME
})
