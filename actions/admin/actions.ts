'use server'

import prisma from "@/lib/db"
import { redirect } from "next/navigation";

export default async function fetchProdutos(){
    const produtos = await prisma.product.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            price: true,
        },
        orderBy: {
            id: 'asc',
        },
    });

    const count = await prisma.product.count();

    return {produtos, count};
}

export async function deleteProduto(id:number | undefined) {
    await prisma.product.delete({
        where: {id}
    })
    redirect('/admin')
}

export async function createProduto(formData: FormData) {
    const title = formData.get("name") as string;
    const price = formData.get("price") as string;
    const description = formData.get('desc') as string;
    const image = formData.get('image') as string;

    await prisma.product.create({
        data:{
            title,
            price,
            description,
            image
        }
    })

    redirect('/admin')
}

export async function updateProduto(id:number, formData: FormData){
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get('desc') as string;
    const image = formData.get('image') as string;

    await prisma.product.update({
        where: {id},
        data:{
            title,
            price,
            description,
            image
        }
    })

    redirect('/admin')}