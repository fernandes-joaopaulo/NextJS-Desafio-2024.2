'use server'

import prisma from "@/lib/db"

export default async function getProdutos(){
    const produtos = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
            image: true,
        },
        take: 8
    })

    return produtos;
}

export async function getCards(){
    const cards = await prisma.card.findMany({
        select: {
            id: true,
            title: true,
            content: true,
        }
    })

    return cards;
}