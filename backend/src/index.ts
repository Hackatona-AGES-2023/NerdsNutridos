import express from 'express'

import { saveToJSON } from './saveToJson'
import { getUserFromJson } from './getUserFromJson'

import { generateUid } from './utils/generateUid'
import { resumeConversation } from './services/gpt'

const app = express()
app.use(express.json())

const port = 3000

app.post('/createUser', async (req, res) => {
  const { conversation } = req.body

  if (!conversation) {
    return res.status(400).send('Missing conversation')
  }

  const uid = generateUid()

  const resume = await resumeConversation(conversation)

  if (!resume) {
    return res.status(500).send('Error on resume conversation')
  }

  const json = JSON.parse(resume) as Record<string, unknown>

  saveToJSON(uid, json)

  return res.json({
    uid,
  })
})

app.get('/user/:uid', (req, res) => {
  const uid = req.params.uid

  if (!uid) {
    return res.status(400).send('Missing uid')
  }

  const user = getUserFromJson(uid)
  console.log(user)

  if (!user) {
    return res.status(404).send('User not found')
  }

  return res.json(user)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
