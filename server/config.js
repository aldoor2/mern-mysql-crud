import { config } from 'dotenv';
config()

export const PORT = process.env.PORT || 4000

export const DB = {
  HOST: process.env.DB_HOST || 'localhost',
  PORT: process.env.DB_PORT || 3306,
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || '',
  DATABASE_NAME: process.env.DB_DATABASE_NAME || 'tasksdb'
}

