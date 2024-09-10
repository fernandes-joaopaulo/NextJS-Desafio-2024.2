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
    })

    return produtos;
}