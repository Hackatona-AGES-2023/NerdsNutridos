import { useEffect, useState } from 'react'

import Bill from '../../public/LogoHorizontal.png'

import { type message } from '../types'

import messageArrToText from '../utils/messageArrToText'

import {
  createUser,
  getUserInfo,
  updateUserInfo,
} from '../services/backendService'
import { firstInteraction, respondToText } from '../services/openai'

import Message from '../Components/Message'
import Loader from '../Components/Loader'

function Chat() {
  const [inp, setInp] = useState('')
  const [messages, setMessages] = useState<message[]>([])
  const [userMessageSending, setUserMessageSending] = useState(false)

  useEffect(() => {
    ;(async () => {
      const uid = localStorage.getItem('uid')

      if (uid) {
        const userInfo = await getUserInfo(uid)

        if (!userInfo) {
          return console.log('could not get user info')
        }

        const response = await respondToText('', userInfo.data, true)

        setMessages((messages) => [
          ...messages,
          {
            id: messages.length + 1,
            text: response.data.choices[0].text!,
            user: 'Bill',
          },
        ])
      } else {
        const response = await firstInteraction()

        setMessages((messages) => [
          ...messages,
          {
            id: messages.length + 1,
            text: response.data.choices[0].text!,
            user: 'Bill',
          },
        ])
      }
    })()
  }, [])

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!inp) return

    const newMessages = [
      ...messages,
      {
        id: messages.length + 1,
        text: inp,
        user: 'Cliente',
      },
    ]

    setUserMessageSending(true)

    const uid = localStorage.getItem('uid')

    if (!uid) {
      // primeiro contato do usuário, cria o usuário no banco
      const messageHistory = messageArrToText(newMessages)

      const newUser = await createUser(messageHistory)

      if (!newUser?.uid) return alert('big shit')

      console.log('CREATED USER ID', newUser)

      localStorage.setItem('uid', newUser.uid)

      respondToText(messageHistory, newUser.data).then((response) => {
        if (!response.data.choices[0].text)
          return alert('Erro ao obter responsta')

        setMessages((messages) => [
          ...messages,
          {
            id: messages.length + 1,
            text: response.data.choices[0].text!,
            user: 'Bill',
          },
        ])
      })
    } else {
      // usuário já logado
      const last4AsText = messageArrToText(newMessages.slice(-4))
      const newUserInfo = await updateUserInfo(uid!, last4AsText)

      if (!newUserInfo) {
        return console.log('new user info went doo doo')
      }

      console.log('new user info not doo doo')
      console.log(newUserInfo)

      respondToText(last4AsText, newUserInfo).then((response) => {
        if (!response.data.choices[0].text)
          return alert('Erro ao obter responsta')

        setMessages((messages) => [
          ...messages,
          {
            id: messages.length + 1,
            text: response.data.choices[0].text!,
            user: 'Bill',
          },
        ])
      })
    }

    setMessages(newMessages)
    setUserMessageSending(false)
    setInp('')
  }

  return (
    <div className="m-auto grid h-full max-w-3xl grid-rows-[auto_1fr_auto_auto]">
      <header className="mx-1 rounded-b-3xl border-2 border-t-0 border-gray-500">
        <img src={Bill} alt="Logo" className="ml-4 h-20" />
      </header>

      <div className="overflow-y-scroll scroll-smooth">
        {messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            user={message.user}
            side={message.user === 'Bill' ? 'left' : 'right'}
          />
        ))}
      </div>

      <form
        onSubmit={handleForm}
        className="mx-2 flex items-center justify-between gap-4 "
      >
        <input
          value={inp}
          onChange={(event) => setInp(event.target.value)}
          type="text"
          className="w-full rounded-lg border-2 border-gray-500 bg-transparent px-4 py-2 outline-none placeholder:text-gray-600"
          placeholder="Digite aqui..."
        />
        <button className="rounded-lg border-2 border-gray-500 px-4 py-2">
          {userMessageSending ? <Loader /> : 'Enviar'}
        </button>
      </form>

      <footer className="my-2 text-center text-gray-500">
        &copy; 2023 NutriBill feito com amor 😻
      </footer>
    </div>
  )
}

export default Chat
