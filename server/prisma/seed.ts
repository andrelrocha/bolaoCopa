import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main () {
    const user = await prisma.user.create({
        data: {
            name: 'fulano',
            email: 'fulano@gmail.com',
            avatarUrl: 'https://github.com/andrelrocha.png'
        }
    })

    const pool = await prisma.pool.create({
        data: {
            title: 'example pool',
            code: 'BOL123',
            ownerId: user.id,

            participants: {
                create: {
                    userId: user.id
                }
            }
        }
    })

    await prisma.game.create({
        data: {
            date: '2023-05-07T15:00:00.931Z',
            firstTeamCountryCode: 'DE',
            secondTeamCountryCode: 'BR',
        }
    })

    await prisma.game.create({
        data: {
            date: '2023-05-05T15:00:00.931Z',
            firstTeamCountryCode: 'BR',
            secondTeamCountryCode: 'AR',

            guesses: {
                create: {
                    firstTeamPoints: 2,
                    secondTeamPoints: 1,

                    participant: {
                        connect: {
                            userId_poolId: {
                                userId: user.id,
                                poolId: pool.id,
                            }
                        }
                    }
                }
            }
        }
    })
}

main()