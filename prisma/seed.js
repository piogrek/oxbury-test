const { PrismaClient } = require('@prisma/client')
const fs = require('fs');

const prisma = new PrismaClient()
const seedData = JSON.parse(fs.readFileSync('./data.json'));


async function main() {
    console.log(`Start seeding ...`, seedData)

    for (const u of seedData.farm) {
        const farm = await prisma.farm.upsert({
            create: u,
            where: {
                id: u.id
            },
            update: u
        })
        console.log(`Created farm with id: ${farm.id}`)
    }
    for (const u of seedData.farmer) {
        const farmer = await prisma.farmer.upsert({
            create: u,
            where: {
                id: u.id
            },
            update: u
        })
        console.log(`Created farmer with id: ${farmer.id}`)
    }
    for (const u of seedData.product) {
        const product = await prisma.product.upsert({
            create: u,
            where: {
                id: u.id
            },
            update: u
        })
        console.log(`Created product with id: ${product.id}`)
    }
    for (const u of seedData.application) {
        const application = await prisma.application.upsert({
            create: u,
            where: {
                id: u.id
            },
            update: u
        })
        console.log(`Created application with id: ${application.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })