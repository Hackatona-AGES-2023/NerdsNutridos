import { Configuration, OpenAIApi } from 'openai'

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
