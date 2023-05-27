import fs from 'node:fs'
import path from 'node:path'

const psth = path.resolve(__dirname, '..', 'db', 'data.json')

export async function saveToJSON(uid: string, data: Record<string, unknown>) {
  const obj = {
    uid,
    data,
  }

  const stuffInJSON = fs.readFileSync(psth, {
    encoding: 'utf-8',
  })

  const stuff = JSON.parse(stuffInJSON) as Record<string, unknown>[]

  stuff.push(obj)

  fs.writeFileSync(psth, JSON.stringify(stuff))
}
