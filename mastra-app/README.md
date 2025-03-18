# usage
```shell
pnpm dev

curl -X POST http://localhost:4111/api/agents/weatherAgent/generate \
-H "Content-Type: application/json" \
-d '{"messages": ["What is the weather in London?"]}'
```

# init
```shell
# https://mastra.ai/docs/getting-started/installation
pnpm create mastra@latest

◇  What do you want to name your project?
│  mastra-app
│
◇  Project created
│
◇  pnpm dependencies installed
│
◇  mastra installed
│
◇  @mastra/core installed
│
◇  .gitignore added
│
└  Project created successfully


┌  Mastra Init
│
◇  Where should we create the Mastra files? (default: src/)
│  src/
│
◇  Choose components to install:
│  Agents, Workflows
│
◇  Add tools?
│  Yes
│
◇  Select default provider:
│  OpenAI
│
◇  Enter your openai API key?
│  Enter API key
│
◇  Enter your API key:
│
◇  Add example
│  Yes
│
◇  Make your AI IDE into a Mastra expert? (installs Mastra docs MCP server)
│  Skip for now
```