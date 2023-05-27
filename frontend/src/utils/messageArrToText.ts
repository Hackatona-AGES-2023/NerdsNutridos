import { message } from '../types'

function messageArrToText(messages: message[]): string {
  const text = messages.reduce((acc, message) => {
    return acc + `${message.user}: ${message.text}` + '\n\n'
  }, '')

  return text
}

export default messageArrToText
