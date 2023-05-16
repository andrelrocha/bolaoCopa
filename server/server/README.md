## Executando o Server

- Instale os pacotes com `npm/yarn install`.
- Faça uma copia do arquivo `.env.example` para `.env` e altere caso necessário.
- Execute `npx prisma migrate dev` para rodar as migrations. (Esse comando também já vai executar as seeds)
- Execute `npx prisma studio` para iniciar uma interface visual para explorar e interagir com o banco de dados
- Execute `npm run dev` para iniciar o servidor.
