# usage
```shell
vim .env.local
OPENAI_API_KEY="....."

# localhost:30000
yarn
yarn dev
```

# init
- https://sdk.vercel.ai/docs/getting-started/nextjs-app-router
```shell
yarn create next-app next-vercel-ai-sample --typescript --eslint --import-alias "@/*" --src-dir --tailwind --app
cd next-vercel-ai-sample
mkdir src/styles
mv src/app/globals.css src/styles/globals.css
```
