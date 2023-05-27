import express from 'express'
import cors from 'cors'

import { saveToJSON } from './saveToJson'
import { getUserFromJson } from './getUserFromJson'

import { generateUid } from './utils/generateUid'
import { extendData, resumeConversation } from './services/gpt'

const app = express()

app.use(cors())

app.use(express.json())

const port = 3000

app.post('/createUser', async (req, res) => {
  console.log('criando novo usuario')

  const conversation = req.headers.conversation as string

  console.log('this is so bad: ', conversation)

  if (!conversation) {
    return res.status(400).send('Missing conversation')
  }

  const uid = generateUid()

  const resume = await resumeConversation(conversation)

  if (!resume) {
    return res.status(500).send('Error on resume conversation')
  }

  const data = JSON.parse(resume) as Record<string, unknown>

  saveToJSON(uid, data)

  return res.json({
    uid,
    data,
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

app.post('/updateUser/:uid', async (req, res) => {
  const conversation = req.headers.conversation as string

  console.log('this is so bad updating: ', conversation)

  const uid = req.params.uid

  if (!uid) {
    return res.status(400).send('Missing uid')
  }

  if (!conversation) {
    return res.status(400).send('Missing conversation')
  }

  const newResume = await extendData(uid, conversation)

  if (!newResume) {
    return res.status(500).send('Error on extend data')
  }

  console.log('new resume: ', newResume)

  const json = JSON.parse(newResume) as Record<string, unknown>

  saveToJSON(uid, json)

  return res.json(json)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
