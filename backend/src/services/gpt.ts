import { Configuration, OpenAIApi } from 'openai'
import { getUserFromJson } from '../getUserFromJson'

const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)

export const resumeConversation = async (conversation: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `
      Com base na seguinte conversa, crie um objeto json com tudo que sabe sobre o cliente. 

      ${conversation}
    `,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })

  return response.data.choices[0].text
}

export const extendData = async (uid: string, convesation: string) => {
  const data = getUserFromJson(uid)

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `
      A mensagem a seguir contêm um JSON com as informações do usuário, e também uma conversa do usuário com o bot, extenda as informações do JSON com base na conversa. 
      Devolva APENAS o objeto JSON.

      JSON: 
      ${JSON.stringify(data!.data)}

      Conversa:
      ${convesation}
    `,
    temperature: 0.7,
    max_tokens: 500,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })

  return response.data.choices[0].text
}
