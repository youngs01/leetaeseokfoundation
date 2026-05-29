import { Pool } from 'pg'

export const isDbAvailable = Boolean(process.env.DATABASE_URL)

type QueryFn = (text: string, params?: any[]) => Promise<{ rows: any[] }>
type GetClientFn = () => Promise<any>

// Declare exported symbols at top-level, implementations assigned below.
export let query: QueryFn
export let getClient: GetClientFn
let defaultExport: any

if (!isDbAvailable) {
  console.warn('Warning: DATABASE_URL is not set. Using noop DB shim.')

  query = async (_text: string, _params?: any[]) => ({ rows: [] })

  getClient = async () => {
    throw new Error('DATABASE client is not available because DATABASE_URL is not set.')
  }

  defaultExport = {} as any
} else {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })

  pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err)
  })

  query = async (text: string, params?: any[]) => {
    const client = await pool.connect()
    try {
      const result = await client.query(text, params)
      return result
    } finally {
      client.release()
    }
  }

  getClient = async () => await pool.connect()

  defaultExport = pool
}

export default defaultExport
