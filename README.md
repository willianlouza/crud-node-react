# CRUD APP - Node React


Clone o repositório
```zsh
git clone https://github.com/willianlouza/crud-node-react.git
cd crud-node-react
```

Então instale as dependências do Backend 

```zsh
cd server
npm install
//ou
yarn 
```
Com todas as dependências do Backend instaladas, agora é necessário realizar a migration do Prisma
A string de conexão está no arquivo '.env'
```zsh
npx prisma migrate
//ou
yarn prisma migrate
```

Agora é so iniciar o servidor de Backend
```zsh
npm run dev
//ou
yarn dev
```


Agora instale as dependências do Frontend e inicie o servidor

```zsh
cd client
npm install
npm run dev
//ou
yarn 
yarn dev
```
