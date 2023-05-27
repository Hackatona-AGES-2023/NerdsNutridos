import { Configuration, OpenAIApi } from 'openai'

console.log(import.meta.env)

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

function respondToText(
  lastText: string,
  userInfo: Record<string, any>,
  hasItBeenAWhile?: boolean
) {
  const prompt = `Você agora é um nutricionista chamado Bill. 
  O seu objetivo é obter informações sobre a dieta do seu cliente, e depois responder quaisquer questões e dúvidas que ele tenha, para que o cliente tenha uma dieta mais saudável.
  Essa é as informações que você tem sobre o cliente: 

  ${JSON.stringify(userInfo)}

  ${
    hasItBeenAWhile
      ? 'O cliente e você não se falam há algum tempo, então puxe assunto.'
      : 'A última mensagem do cliente foi: ' + lastText
  } 
  
  Bill:`

  return openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 640,
    temperature: 0.9,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    best_of: 1,
    n: 1,
    stream: false,
    stop: ['\n'],
  })
}

function firstInteraction() {
  return openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Você responderá como Bill, o nutricionista. Este é o seu primeiro encontro com este cliente, então seja atencioso e tente aprender sobre a dieta atual do cliente e outras informações importantes sobre ele, como nome, idade, peso, situação financeira, objetivos (se deseja perder ou ganhar peso), hábitos alimentares (se comem em casa ou em restaurantes, se têm tempo para cozinhar ou não), restrições alimentares, preferências de alimentos e outras informações relevantes. 
      Não pergunte todas as informações de uma vez, leve a conversa casualmente, sempre respeitando o cliente. Não use aspas.
      Bill: `,
    max_tokens: 640,
    temperature: 0.9,
    top_p: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
    best_of: 1,
    n: 1,
    stream: false,
    stop: ['\n'],
  })
}

export { respondToText, firstInteraction }
