# NerdsNutridos

# NutriBill

NutriBill é um assistente alimentar inteligente desenvolvido para ajudar pessoas de baixa renda no planejamento de hábitos alimentares saudáveis. Essa IA tem como objetivo fornecer orientações nutricionais acessíveis e personalizadas, levando em consideração diversos aspectos do usuário, inclusive restrições orçamentárias.

# Objetivo

NutriBill tem como objetivo principal tornar a alimentação saudável e equilibrada para todas as pessoas, independente de suas condições financeiras. Ele foi projetado para ser uma ferramenta útil e eficaz para aqueles que desejam melhorar seus hábitos alimentares, mas têm restrições orcamentárias. O NutriBill leva em consideração o orçamento disponível do usuário e fornece recomendações nutricionais adaptadas às suas necessidades específicas.

# Recursos Principais

- **Planejamento de Refeições:** O NutriBill ajuda os usuários a planejar refeições saudáveis e equilibradas com base em suas preferências alimentares e orçamento disponível.
- **Listas de Compras Inteligentes:** Com base nas refeições planejadas, o NutriBill gera listas de compras inteligentes, levando em consideração o orçamento do usuário.
- **Recomendações Nutricionais Personalizadas:** O assistente alimentar inteligente fornece recomendações nutricionais personalizadas, considerando as necessidades individuais de cada usuário, como idade, sexo, altura, peso e objetivos de saúde.
- **Análise de Alimentos:** O NutriBill possui um banco de dados abrangente com informações nutricionais de alimentos comumente consumidos. Ele ajuda os usuários a entenderem o valor nutricional dos alimentos e a tomar decisões informadas sobre suas escolhas alimentares.
- **Dicas e Orientações:** Além de fornecer recomendações nutricionais, o NutriBill oferece dicas e orientações úteis sobre hábitos alimentares saudáveis, incluindo informações sobre porções adequadas e balanceamento de nutrientes.

# Fluxograma
Os dados da aplicação passam por um camninho semelhante a esse:
[Link do arquivo](https://www.figma.com/file/5PGwkln6V2doMIARVay7XB/Fluxograma?type=whiteboard&node-id=717%3A274&t=UdJ2zonjzreSEmdM-1)

![Fluxograma](https://github.com/Hackatona-AGES-2023/NerdsNutridos/assets/79384667/68f17251-09f9-4f62-9105-cff6dbf85521)

No primeiro acesso do usuário, o backend gera um ID único, que então é salvo no `localStorage` do navegador. Depois a IA entra e começa a fazer perguntas de uma maneira casual para conhecer melhor o usuário e dar o atendimento que ele precisa. A cada nova informação dita pelo usuário, a conversa é enviada para o backend e então é analisada por outra IA, que por sua vez condensa as informações do usuário e guarda elas num banco de dados, para que possam ser buscadas toda vez que o usuário entra na plataforma novamente. Isso garante uma memória de longo prazo para a IA, que pode oferecer recomendações coerentes mesmo após um longo tempo sem contato.

# Tecnologias

- **Front-end:**
  - React
  - TailwindCss
  - TypeScript
  - OpenAI API

- **Back-end:**
  - NodeJS
  - OpenAI API
  - TypeScript
  - Express
