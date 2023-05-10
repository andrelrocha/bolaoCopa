import { FastifyRequest } from 'fastify'

//não cria nenhuma nova rota, somente é utilizado em outras rotas 
export async function authenticate(request: FastifyRequest) {
    await request.jwtVerify()
}