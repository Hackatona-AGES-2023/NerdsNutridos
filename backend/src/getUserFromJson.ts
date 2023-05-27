import fs from 'node:fs'
import path from 'node:path'

const p = path.resolve(__dirname, '..', 'db', 'data.json')

export function getUserFromJson(uid: string) {
  const stuffInJSON = fs.readFileSync(p, {
    encoding: 'utf-8',
  })

  const stuff = JSON.parse(stuffInJSON) as Record<string, unknown>[]

  const user = stuff.find((item) => item.uid === uid)

  return user
}
